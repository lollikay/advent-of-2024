// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import containerStyle from '@shared/ui/container/style.module.scss';
import style from './style.module.scss';
import { TextContent } from '@features/text-content/ui';

export const CssChallenge16 = () => {
  return (
    <>
      <div class={containerStyle.container}>
        <h1>CSS Challenge 16: Custom scrollbar</h1>
      </div>
      <div class={style.pageContents}>
        <section class={containerStyle.container}>
          <TextContent />
        </section>
      </div>
    </>
  );
};
