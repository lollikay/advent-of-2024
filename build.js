#!/usr/bin/env node

const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function main() {
  try {
    // Clean and create directories
    if (fs.existsSync('dist')) {
      fs.rmSync('dist', { recursive: true });
    }
    fs.mkdirSync('dist', { recursive: true });
    fs.mkdirSync('dist/styles', { recursive: true });
    fs.mkdirSync('dist/scripts', { recursive: true });
    
    console.log('🧹 Cleaned dist directory');

    // Build SCSS
    execSync('npx sass src/styles/main.scss dist/styles/main.css', { stdio: 'inherit' });
    console.log('🎨 Built SCSS to CSS');

    // Build client TypeScript
    await esbuild.build({
      entryPoints: ['src/scripts/main.ts'],
      bundle: true,
      outfile: 'dist/scripts/main.js',
      format: 'iife',
      target: 'es2020',
      minify: process.env.NODE_ENV === 'production',
    });
    console.log('📦 Built TypeScript client scripts');

    // Build pages using TSX
    await buildTSXPages();

    console.log('✅ Build completed successfully!');
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

async function buildTSXPages() {
  const tempDir = 'temp-build';
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true });
  }
  fs.mkdirSync(tempDir, { recursive: true });

  try {
    // Build all TypeScript/TSX files to CommonJS
    await esbuild.build({
      entryPoints: [
        'src/jsx-runtime.ts',
        'src/components/Layout.tsx',
        'src/components/Card.tsx',
        'src/pages/index.tsx',
        'src/pages/about.tsx'
      ],
      outdir: tempDir,
      format: 'cjs',
      target: 'node16',
      jsx: 'transform',
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
      platform: 'node',
      bundle: false,
      // We need to preserve the directory structure
      outExtension: { '.js': '.js' },
    });

    console.log('📝 Compiled TSX files to JavaScript');

    // Now execute each page to generate HTML
    const pages = ['index', 'about'];
    
    for (const pageName of pages) {
      try {
        const pagePath = path.join(tempDir, 'pages', `${pageName}.js`);
        
        if (!fs.existsSync(pagePath)) {
          console.warn(`⚠️  Page file not found: ${pagePath}`);
          continue;
        }

        // Clear require cache
        const fullPath = path.resolve(pagePath);
        delete require.cache[fullPath];
        
        // Also clear cache for dependencies
        Object.keys(require.cache).forEach(key => {
          if (key.includes(tempDir)) {
            delete require.cache[key];
          }
        });

        // Require the compiled page
        const pageModule = require(`./${pagePath}`);
        
        if (!pageModule.html) {
          console.warn(`⚠️  No HTML export found for ${pageName}`);
          continue;
        }

        // Get the HTML
        const html = pageModule.html;
        
        // Write HTML file
        const outputPath = pageName === 'index' ? 'dist/index.html' : `dist/${pageName}/index.html`;
        const outputDir = path.dirname(outputPath);
        
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true });
        }
        
        fs.writeFileSync(outputPath, `<!DOCTYPE html>\n${html}`);
        console.log(`📄 Built ${pageName} page from TSX`);
      } catch (error) {
        console.error(`❌ Failed to build ${pageName} page:`, error.message);
        console.error(error.stack);
      }
    }
  } finally {
    // Clean up temp directory
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true });
    }
  }
}

main();