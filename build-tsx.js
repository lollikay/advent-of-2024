#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// This is a simple page generator script that executes TSX files and generates HTML
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
    execSync('npx esbuild src/scripts/main.ts --bundle --outfile=dist/scripts/main.js --format=iife --target=es2020', { stdio: 'inherit' });
    console.log('📦 Built TypeScript client scripts');

    // Compile TSX pages using TypeScript compiler, then execute them
    execSync('npx tsc --outDir temp-compiled --jsx react --jsxFactory h --jsxFragment Fragment --target es2020 --module commonjs --esModuleInterop --skipLibCheck', { stdio: 'inherit' });
    console.log('📝 Compiled TypeScript files');

    // Generate HTML from compiled pages
    const pagesDir = 'temp-compiled/pages';
    if (fs.existsSync(pagesDir)) {
      const pages = fs.readdirSync(pagesDir).filter(file => file.endsWith('.js'));
      
      for (const page of pages) {
        const pageName = path.basename(page, '.js');
        const pagePath = path.join(pagesDir, page);
        
        try {
          // Clear require cache
          const fullPath = path.resolve(pagePath);
          delete require.cache[fullPath];
          
          // Require the compiled page
          const pageModule = require(`./${pagePath}`);
          
          if (pageModule.html) {
            const outputPath = pageName === 'index' ? 'dist/index.html' : `dist/${pageName}/index.html`;
            const outputDir = path.dirname(outputPath);
            
            if (!fs.existsSync(outputDir)) {
              fs.mkdirSync(outputDir, { recursive: true });
            }
            
            fs.writeFileSync(outputPath, `<!DOCTYPE html>\n${pageModule.html}`);
            console.log(`📄 Built ${pageName} page`);
          }
        } catch (error) {
          console.error(`❌ Failed to build ${pageName} page:`, error.message);
        }
      }
    }

    // Clean up temp directory
    if (fs.existsSync('temp-compiled')) {
      fs.rmSync('temp-compiled', { recursive: true });
    }

    console.log('✅ Build completed successfully!');
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

main();