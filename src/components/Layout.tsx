import { h, VNode } from '../jsx-runtime';
import '../types';

export interface LayoutProps {
  title: string;
  children: (VNode | string)[];
}

export function Layout({ title, children }: LayoutProps): VNode {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/main.css" />
      </head>
      <body>
        <header className="header">
          <h1>My Static Site</h1>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
          </nav>
        </header>
        <main className="main">
          {children}
        </main>
        <footer className="footer">
          <p>&copy; 2024 My Static Site</p>
        </footer>
        <script src="/scripts/main.js"></script>
      </body>
    </html>
  );
}