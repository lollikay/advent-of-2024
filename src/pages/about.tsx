import { h, renderToString } from '../jsx-runtime';
import { Layout } from '../components/Layout';

export function AboutPage() {
  return (
    <Layout title="About - My Static Site" children={[
      <h2>About This Project</h2>,
      <p>
        This static site generator demonstrates how to build modern websites using:
      </p>,
      <ul>
        <li><strong>TSX</strong> for component-based templating without React</li>
        <li><strong>SCSS</strong> for advanced styling capabilities</li>
        <li><strong>TypeScript</strong> for type safety and better development experience</li>
        <li><strong>esbuild</strong> for fast compilation and bundling</li>
      </ul>,
      <p>
        The result is a lightweight, fast-loading static website with modern development tools.
      </p>
    ]}>
    </Layout>
  );
}

export const html = renderToString(AboutPage());