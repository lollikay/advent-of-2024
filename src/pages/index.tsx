import { h, renderToString } from '../jsx-runtime';
import '../types';
import { Layout } from '../components/Layout';
import { Card } from '../components/Card';

export function HomePage() {
  return (
    <Layout title="Home - My Static Site" children={[
      <h2>Welcome to My Static Site</h2>,
      <p>This is a simple static website built with TSX templating, SCSS, and TypeScript.</p>,
      
      <div className="cards-grid">
        <Card 
          title="Fast Build" 
          content="Built with esbuild for lightning-fast compilation." 
        />
        <Card 
          title="TypeScript" 
          content="Fully typed with TypeScript for better developer experience." 
        />
        <Card 
          title="SCSS Support" 
          content="Style your components with the power of SCSS." 
        />
        <Card 
          title="No Framework" 
          content="Lightweight static site generation without heavy frameworks." 
        />
      </div>
    ]}>
    </Layout>
  );
}

export const html = renderToString(HomePage());