// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import '@shared/ui/container/style.scss';
import style from './style.module.scss';
import { TextContent } from '@features/text-content/ui';

export const CssChallenge16 = () => {
  return (
    <>
      <div class="container">
        <h2>CSS Challenge 16: Custom scrollbar</h2>
      </div>
      <div class={style.pageContents}>
        <section class="container">
          <TextContent />
        </section>
      </div>
    </>
  )
};
