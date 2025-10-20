// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import containerStyle from '@shared/ui/container/style.module.scss';
import style from './style.module.scss';

export const CssChallenge21 = () => {
  return (
    <section class={style.section}>
      <div class={containerStyle.container}>
        <label class={style.themeSwitcher} aria-label="Toggle dark mode">
          <input type="checkbox" aria-label="Toggle theme" />
          <span class={style.switch}></span>
        </label>
      </div>
    </section>
  );
};
