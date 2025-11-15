// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import containerStyle from '@shared/ui/container/style.module.scss';
import style from './style.module.scss';
import { ScrollHint } from '../components/scroll-hint/ui';
import { Navigation } from '../components/navigation/ui';

export const CssChallenge08 = () => {
  return (
    <div class={style.cssChallenge08}>
      <section>
        <header>
          <div class={containerStyle.container}>
            <Navigation />
          </div>
        </header>
        <main></main>
        <footer>
          <div class={containerStyle.container}>
            <ScrollHint />
          </div>
        </footer>
      </section>
    </div>
  );
};
