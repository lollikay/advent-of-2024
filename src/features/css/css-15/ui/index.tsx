// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import '@shared/ui/container/style.scss';
import style from './style.module.scss';

export const CssChallenge15 = () => {
  return (
    <section class="container">
      <h1 class={style.highlighted}>
        <span>CSS Challenge 15: Candy cane jingle sleigh reindeer sparkle gingerbread.</span>
      </h1>
      <h1 class={`${style.highlighted} ${style.themed}`}>
        <span>Themed version: Candy cane jingle sleigh reindeer sparkle gingerbread.</span>
      </h1>
    </section>
  )
};
