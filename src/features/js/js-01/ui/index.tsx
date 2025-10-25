// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import containerStyle from '@shared/ui/container/style.module.scss';
import style from './style.module.scss';
import { EyeIcon, LockIcon } from '../components';

export const JsChallenge01 = () => {
  return (
    <section
      id="js-challenge-01"
      class={containerStyle.container}
    >
      <h1>JS Challenge 01: Password input</h1>
      <form>
        <label
          class={style.inputGroup}
          data-js-input-group
        >
          <span class={style.label} title="Password">
            <LockIcon />
          </span>
          <div class={style.verticalDivider}></div>
          <input
            type="password"
            class={style.input}
            autocomplete="off"
            placeholder="password"
            data-js-input
          />
          <span class={style.action}>
            <button
              class={style.iconButton}
              title="Toggle password"
              data-js-action
              type="button"
            >
              <EyeIcon />
            </button>
          </span>
        </label>
      </form>
    </section>
  );
};
