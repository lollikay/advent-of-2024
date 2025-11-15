// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import containerStyle from '@shared/ui/container/style.module.scss';
import style from './style.module.scss';
import inputStyle from '../../js-06/ui/style.module.scss';

export const JsChallenge07 = () => {
  return (
    <section class={containerStyle.container} data-js-challenge="07">
      <h1>JS Challenge 07: Slug generation</h1>
      <div class={style.formGroup} data-js-slug>
        <label class={style.label} for="slug">
          Title
        </label>
        <input
          type="text"
          data-js-input
          name="slug"
          class={inputStyle.input}
          value="Once upon a time there was a princess of Niger..."
        />
        <div class={style.slug} data-js-output></div>
      </div>
    </section>
  );
};
