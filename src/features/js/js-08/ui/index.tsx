// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import containerStyle from '@shared/ui/container/style.module.scss';
import style from './style.module.scss';

export const JsChallenge08 = () => {
  return (
    <section class={containerStyle.container} data-js-challenge="08">
      <h1>JS Challenge 08: Tags in the input</h1>
      <div class={style.formGroup} data-js-input-tags>
        <label class={style.label} for="tags">
          Tags
        </label>
        <div class={style.input} contenteditable="true" id="tags" data-js-input>
          Elves, Santa, presents
        </div>
      </div>
    </section>
  );
};
