// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import containerStyle from '@shared/ui/container/style.module.scss';
import marginStyle from '@shared/ui/margins/style.module.scss';
import { Tabs } from '../components/tabs/ui';
import { AltTabs } from '../components/alt-tabs/ui';

const tabs = [
  {
    image: `
<svg viewBox="0 0 32 32">
  <path d="M10 12h4v4h-4zM16 12h4v4h-4zM22 12h4v4h-4zM4 24h4v4h-4zM10 24h4v4h-4zM16 24h4v4h-4zM10 18h4v4h-4zM16 18h4v4h-4zM22 18h4v4h-4zM4 18h4v4h-4zM26 0v2h-4v-2h-14v2h-4v-2h-4v32h30v-32h-4zM28 30h-26v-22h26v22z" fill="currentColor"></path>
</svg>
`,
    content: 'Calendar',
  },
  {
    image: `
<svg viewBox="0 0 32 32">
  <path d="M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z" fill="currentColor"></path>
</svg>
`,
    content: 'User',
  },
  {
    image: `
<svg viewBox="0 0 32 32">
  <path d="M22 4h-4v-2c0-1.1-0.9-2-2-2h-4c-1.1 0-2 0.9-2 2v2h-4v4h16v-4zM16 4h-4v-1.996c0.001-0.001 0.002-0.002 0.004-0.004h3.993c0.001 0.001 0.003 0.002 0.004 0.004v1.996zM26 10v-5c0-0.55-0.45-1-1-1h-2v2h1v4h-6l-6 6v8h-8v-18h1v-2h-2c-0.55 0-1 0.45-1 1v20c0 0.55 0.45 1 1 1h9v6h20v-22h-6zM18 12.828v3.172h-3.172l3.172-3.172zM30 30h-16v-12h6v-6h10v18z" fill="currentColor"></path>
</svg>
`,
    content: 'Form',
  },
];

const themedTabs = [
  {
    title: 'Calendar',
  },
  {
    title: 'Some other tab name, rather longish one, just to see how it looks',
  },
  {
    title: 'A shorter tab, but still long',
  },
];

export const CssChallenge13 = () => {
  return (
    <>
      <section class={`${containerStyle.container} ${marginStyle.mb5}`}>
        <h2>CSS Challenge 13: 3-state toggle</h2>
        <Tabs tabs={tabs} />
      </section>
      <section class={containerStyle.container}>
        <h2>Alternative tabs with varied tab switch width</h2>
        <AltTabs tabs={themedTabs} />
      </section>
    </>
  )
};
