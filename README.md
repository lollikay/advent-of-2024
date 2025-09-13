# Advent of 2024 - Static Site with TSX

A simple static website generator built with TSX templating, SCSS, and TypeScript without React or other heavy frameworks.

## Features

- 🚀 **TSX Templating**: Component-based templating using JSX syntax without React
- 🎨 **SCSS Support**: Advanced styling with variables, mixins, and modern CSS features
- 📝 **TypeScript**: Full type safety and modern JavaScript features
- ⚡ **Fast Build**: Lightning-fast compilation with esbuild
- 🪶 **Lightweight**: No heavy frameworks or dependencies
- 📱 **Responsive**: Mobile-first responsive design
- 🔧 **Development Server**: Built-in development server with live reload

## Quick Start

```bash
# Install dependencies
npm install

# Build the site
npm run build

# Start development server
npm run dev

# Type check
npm run type-check

# Clean build artifacts
npm run clean
```

## Project Structure

```
src/
├── components/        # Reusable TSX components
│   ├── Layout.tsx    # Main layout wrapper
│   └── Card.tsx      # Card component
├── pages/            # Page templates
│   ├── index.tsx     # Homepage
│   └── about.tsx     # About page
├── scripts/          # Client-side TypeScript
│   └── main.ts       # Main client script
├── styles/           # SCSS stylesheets
│   └── main.scss     # Main stylesheet
├── jsx-runtime.ts    # Custom JSX factory (React alternative)
└── types.ts          # TypeScript type definitions

dist/                 # Built static files
├── index.html        # Generated homepage
├── about/
│   └── index.html    # Generated about page
├── styles/
│   └── main.css      # Compiled CSS
└── scripts/
    └── main.js       # Compiled client script
```

## How It Works

### TSX Templating

This setup uses a custom JSX factory instead of React:

```tsx
import { h, VNode } from '../jsx-runtime';

export function MyComponent(): VNode {
  return (
    <div className="my-component">
      <h1>Hello World</h1>
    </div>
  );
}
```

The custom JSX runtime (`jsx-runtime.ts`) provides:
- `h()` function for JSX element creation
- `renderToString()` for server-side rendering
- `Fragment` support for multiple elements
- Automatic `className` → `class` conversion

### Build Process

1. **SCSS Compilation**: `sass` compiles SCSS to CSS
2. **TypeScript Compilation**: `esbuild` compiles TypeScript/TSX to JavaScript
3. **Static Generation**: Custom build script executes TSX components to generate HTML
4. **Client Scripts**: `esbuild` bundles client-side TypeScript

### Component System

Components are defined as TypeScript functions returning VNode objects:

```tsx
interface CardProps {
  title: string;
  content: string;
  className?: string;
}

export function Card({ title, content, className = '' }: CardProps): VNode {
  return (
    <div className={`card ${className}`}>
      <h3 className="card-title">{title}</h3>
      <p className="card-content">{content}</p>
    </div>
  );
}
```

### Pages

Pages are TSX components that export an `html` string:

```tsx
export function HomePage() {
  return (
    <Layout title="Home">
      <h1>Welcome</h1>
    </Layout>
  );
}

export const html = renderToString(HomePage());
```

## Development

### Adding New Pages

1. Create a new `.tsx` file in `src/pages/`
2. Export a component function and `html` string
3. The build script will automatically generate the HTML file

### Adding New Components

1. Create a new `.tsx` file in `src/components/`
2. Export your component function with proper TypeScript types
3. Import and use in pages or other components

### Styling

- Edit `src/styles/main.scss` for global styles
- Use SCSS features like variables, mixins, and nesting
- Classes are automatically available in TSX components

### Client-Side JavaScript

- Edit `src/scripts/main.ts` for client-side functionality
- Full TypeScript support with type checking
- Automatically bundled and included in pages

## Build Scripts

- `npm run build` - Full production build
- `npm run build:simple` - Simple build without TSX (fallback)
- `npm run dev` - Build and start development server
- `npm run type-check` - TypeScript type checking only
- `npm run clean` - Remove build artifacts

## Browser Support

- Modern browsers (ES2020+)
- CSS Grid and Flexbox support
- No IE support

## License

ISC