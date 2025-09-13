const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Clean dist directory
if (fs.existsSync('dist')) {
  fs.rmSync('dist', { recursive: true });
}
fs.mkdirSync('dist', { recursive: true });
fs.mkdirSync('dist/styles', { recursive: true });
fs.mkdirSync('dist/scripts', { recursive: true });

console.log('🧹 Cleaned dist directory');

// Build SCSS to CSS
try {
  execSync('npx sass src/styles/main.scss dist/styles/main.css', { stdio: 'inherit' });
  console.log('🎨 Built SCSS to CSS');
} catch (error) {
  console.error('❌ SCSS build failed:', error.message);
  process.exit(1);
}

// Build TypeScript client scripts
esbuild.build({
  entryPoints: ['src/scripts/main.ts'],
  bundle: true,
  outfile: 'dist/scripts/main.js',
  format: 'iife',
  target: 'es2020',
  minify: process.env.NODE_ENV === 'production',
}).then(() => {
  console.log('📦 Built TypeScript client scripts');
}).catch((error) => {
  console.error('❌ TypeScript build failed:', error);
  process.exit(1);
});

// Build pages using Node.js execution
const buildPages = async () => {
  const pagesDir = 'src/pages';
  const pages = fs.readdirSync(pagesDir).filter(file => file.endsWith('.tsx'));
  
  // Create a temporary directory for compiled files
  const tempDir = 'temp-build';
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true });
  }
  fs.mkdirSync(tempDir, { recursive: true });
  
  try {
    // First compile all TypeScript files to JavaScript
    await esbuild.build({
      entryPoints: [
        'src/jsx-runtime.ts',
        'src/components/Layout.tsx',
        'src/components/Card.tsx',
        ...pages.map(page => `src/pages/${page}`)
      ],
      outdir: tempDir,
      format: 'cjs',
      target: 'node16',
      jsx: 'transform',
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
      platform: 'node',
      bundle: false,
    });
    
    console.log('📝 Compiled TypeScript files');
    
    // Now execute each page to generate HTML
    for (const page of pages) {
      const pageName = path.basename(page, '.tsx');
      const compiledPagePath = path.join(tempDir, 'pages', `${pageName}.js`);
      
      try {
        // Clear require cache
        const fullPath = path.resolve(compiledPagePath);
        delete require.cache[fullPath];
        
        // Require the compiled page
        const pageModule = require(`./${compiledPagePath}`);
        
        // Get the HTML
        const html = pageModule.html;
        
        if (!html) {
          console.warn(`⚠️  No HTML export found for ${pageName}`);
          continue;
        }
        
        // Write HTML file
        const outputPath = pageName === 'index' ? 'dist/index.html' : `dist/${pageName}/index.html`;
        const outputDir = path.dirname(outputPath);
        
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true });
        }
        
        fs.writeFileSync(outputPath, `<!DOCTYPE html>\n${html}`);
        console.log(`📄 Built ${pageName} page`);
      } catch (error) {
        console.error(`❌ Failed to build ${pageName} page:`, error.message);
      }
    }
  } finally {
    // Clean up temp directory
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true });
    }
  }
};

buildPages().then(() => {
  console.log('✅ Build completed successfully!');
}).catch((error) => {
  console.error('❌ Build failed:', error);
  process.exit(1);
});