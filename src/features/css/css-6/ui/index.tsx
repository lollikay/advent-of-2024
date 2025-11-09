// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import containerStyle from '@shared/ui/container/style.module.scss';
import style from './style.module.scss';
import { TextContent } from '@features/text-content/ui';

export const CssChallenge06 = () => {
  return (
    <>
      <section class={`${containerStyle.container} ${style.cssChallenge06}`}>
        <h1>CSS Challenge 06: scroll progress</h1>
        {Array(3)
          .fill(null)
          .map(() => (
            <TextContent />
          ))}
      </section>
    </>
  );
};
