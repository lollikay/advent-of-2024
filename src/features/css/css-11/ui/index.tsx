// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import containerStyle from '@shared/ui/container/style.module.scss';
import marginStyle from '@shared/ui/margins/style.module.scss';
import style from './style.module.scss';
import { TextContent } from '@features/text-content/ui';

export const CssChallenge11 = () => {
  return (
    <section class={`${containerStyle.container} ${marginStyle.my5}`}>
      <div class={style.section}>
        <h1 class={style.sectionHeader}>
          CSS Challenge 11:<br />
          vertical header
        </h1>
        <div class={style.sectionContent}>
          <TextContent />
        </div>
      </div>
    </section>
  )
};
