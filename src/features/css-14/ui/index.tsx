// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import '@shared/ui/container/style.scss';
import '@shared/ui/margins/style.scss';
import style from './style.module.scss';
import { TextContent } from '@features/text-content/ui';

export const CssChallenge14 = () => {
  return (
    <>
      <div class={style.ribbon}>
        <div class={style.text}>
          Advent of CSS 2024
        </div>
      </div>
      <section class="container">
        <h1>CSS Challenge 15: Website ribbon</h1>
        <TextContent />
      </section>
    </>
  )
};
