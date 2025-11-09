// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import containerStyle from '@shared/ui/container/style.module.scss';
import style from './style.module.scss';
import { TextContent } from '@features/text-content/ui';

const nav = [
  {
    title: 'Home',
    href: '#',
  },
  {
    title: 'About',
    href: '#',
  },
  {
    title: 'Services',
    href: '#',
  },
  {
    title: 'Contact',
    href: '#',
  },
  {
    title: 'Blog',
    href: '#',
  },
];

export const CssChallenge20 = () => {
  return (
    <section class={style.section}>
      <div class={containerStyle.container}>
        <nav class={style.navbar}>
          <ul>
            {nav.map((item) => (
              <li>
                <a href={item.href}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <h1>CSS Challenge 20: sticky navigation with a frosted glass effect.</h1>
        <TextContent />
      </div>
    </section>
  );
};
