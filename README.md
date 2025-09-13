# Advent of Code 2024

A modern TypeScript Vite application with SCSS support and @kitajs/html for TSX components.

## Features

- ⚡ **Vite** - Lightning fast build tool and dev server
- 🔷 **TypeScript** - Type-safe JavaScript with excellent tooling
- 🎨 **SCSS** - Enhanced CSS with variables, nesting, and mixins
- 🏷️ **@kitajs/html** - Write HTML using TSX syntax for component-based development
- 🔥 **Hot Module Replacement** - Instant updates during development
- 📦 **Modern Build Tooling** - Optimized production builds

## Tech Stack

- [Vite](https://vite.dev/) - Build tool and development server
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [SCSS/Sass](https://sass-lang.com/) - CSS preprocessor
- [@kitajs/html](https://github.com/kitajs/html) - Fast and lightweight HTML templating

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd advent-of-2024
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view the application.

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally

## Project Structure

```
src/
├── components.tsx    # @kitajs/html TSX components
├── main.ts          # Application entry point
├── style.scss       # SCSS styles with variables and nesting
├── counter.ts       # Example TypeScript module
├── vite-env.d.ts    # Vite and @kitajs/html type declarations
└── typescript.svg   # TypeScript logo asset

public/
└── vite.svg         # Vite logo asset

├── index.html       # HTML template
├── package.json     # Dependencies and scripts
├── tsconfig.json    # TypeScript configuration
├── vite.config.ts   # Vite configuration with SCSS and JSX support
└── .gitignore       # Git ignore rules
```

## Configuration

### TypeScript Configuration

The project uses TypeScript with JSX support configured for @kitajs/html:

```json
{
  "jsx": "preserve",
  "jsxFactory": "Html.createElement",
  "jsxFragmentFactory": "Html.Fragment"
}
```

### Vite Configuration

SCSS preprocessing and JSX transformation are configured in `vite.config.ts`:

```typescript
{
  esbuild: {
    jsx: 'transform',
    jsxFactory: 'Html.createElement',
    jsxFragment: 'Html.Fragment',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ``, // Global SCSS imports
      },
    },
  }
}
```

## Usage Examples

### Creating TSX Components with @kitajs/html

```tsx
import Html from '@kitajs/html'

export function WelcomeCard({ name, count }: { name: string; count: number }) {
  return (
    <div class="card">
      <h2>Welcome to {name}</h2>
      <p>Current count: <strong>{count}</strong></p>
      <button class="button">Count is {count}</button>
    </div>
  )
}
```

### Using SCSS Features

```scss
// Variables
$primary-color: #646cff;
$secondary-color: #535bf2;

// Nesting
.button {
  background: $primary-color;
  
  &:hover {
    background: $secondary-color;
    transform: translateY(-2px);
  }
}
```

## Development Ready

The project is now ready for Advent of Code 2024 development with:

- ✅ Fast development server with HMR
- ✅ TypeScript for type safety
- ✅ SCSS for enhanced styling capabilities
- ✅ Component-based architecture with @kitajs/html
- ✅ Production-ready build configuration
- ✅ Clean project structure

Happy coding! 🎄✨