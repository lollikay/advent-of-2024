import { defineConfig } from 'vite';

export default defineConfig({
  // Enable JSX transformation for @kitajs/html
  esbuild: {
    jsx: 'transform',
    jsxFactory: 'Html.createElement',
    jsxFragment: 'Html.Fragment',
  },
  // SCSS is automatically supported by Vite when sass is installed
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ``, // Add global SCSS imports here if needed
      },
    },
  },
  // Configure file extensions
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css'],
    alias: {
      '@shared': '/src/shared',
      '@widgets': '/src/widgets',
      '@features': '/src/features',
    },
  },
})