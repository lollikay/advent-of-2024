// JSX type definitions for our custom JSX factory
import { VNode } from './jsx-runtime';

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface IntrinsicElements {
      // HTML elements
      a: any;
      body: any;
      div: any;
      footer: any;
      h1: any;
      h2: any;
      h3: any;
      head: any;
      header: any;
      html: any;
      li: any;
      link: any;
      main: any;
      meta: any;
      nav: any;
      p: any;
      script: any;
      strong: any;
      title: any;
      ul: any;
      [elemName: string]: any;
    }
  }
}

export {};