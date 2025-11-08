// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import containerStyle from '@shared/ui/container/style.module.scss';
import style from './style.module.scss';

export const JsChallenge05 = () => {
  return (
    <section
      class={containerStyle.container}
      data-js-challenge="05"
    >
      <h1>JS Challenge 05: Character counter</h1>
      <div class={style.formGroup}>
        <textarea
          name="someText"
          data-js-character-counter
          class={style.textarea}
        ></textarea>
        <div class={style.count}>
          Characters: <span data-js-character-count>0</span>
        </div>
      </div>
    </section>
  );
};
