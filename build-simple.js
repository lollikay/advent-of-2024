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

// Simple HTML generation using string templates
const generateHTML = () => {
  // Generate index.html
  const indexHTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home - My Static Site</title>
    <link rel="stylesheet" href="/styles/main.css" />
  </head>
  <body>
    <header class="header">
      <h1>My Static Site</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
    <main class="main">
      <h2>Welcome to My Static Site</h2>
      <p>This is a simple static website built with TSX templating, SCSS, and TypeScript.</p>
      
      <div class="cards-grid">
        <div class="card">
          <h3 class="card-title">Fast Build</h3>
          <p class="card-content">Built with esbuild for lightning-fast compilation.</p>
        </div>
        <div class="card">
          <h3 class="card-title">TypeScript</h3>
          <p class="card-content">Fully typed with TypeScript for better developer experience.</p>
        </div>
        <div class="card">
          <h3 class="card-title">SCSS Support</h3>
          <p class="card-content">Style your components with the power of SCSS.</p>
        </div>
        <div class="card">
          <h3 class="card-title">No Framework</h3>
          <p class="card-content">Lightweight static site generation without heavy frameworks.</p>
        </div>
      </div>
    </main>
    <footer class="footer">
      <p>&copy; 2024 My Static Site</p>
    </footer>
    <script src="/scripts/main.js"></script>
  </body>
</html>`;

  // Generate about.html
  const aboutHTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>About - My Static Site</title>
    <link rel="stylesheet" href="/styles/main.css" />
  </head>
  <body>
    <header class="header">
      <h1>My Static Site</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
    <main class="main">
      <h2>About This Project</h2>
      <p>
        This static site generator demonstrates how to build modern websites using:
      </p>
      <ul>
        <li><strong>TSX</strong> for component-based templating without React</li>
        <li><strong>SCSS</strong> for advanced styling capabilities</li>
        <li><strong>TypeScript</strong> for type safety and better development experience</li>
        <li><strong>esbuild</strong> for fast compilation and bundling</li>
      </ul>
      <p>
        The result is a lightweight, fast-loading static website with modern development tools.
      </p>
    </main>
    <footer class="footer">
      <p>&copy; 2024 My Static Site</p>
    </footer>
    <script src="/scripts/main.js"></script>
  </body>
</html>`;

  // Write HTML files
  fs.writeFileSync('dist/index.html', indexHTML);
  fs.mkdirSync('dist/about', { recursive: true });
  fs.writeFileSync('dist/about/index.html', aboutHTML);
  
  console.log('📄 Generated HTML pages');
};

generateHTML();
console.log('✅ Build completed successfully!');