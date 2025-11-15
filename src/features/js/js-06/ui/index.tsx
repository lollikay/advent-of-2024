// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import containerStyle from '@shared/ui/container/style.module.scss';
import style from './style.module.scss';
import { ClipboardIcon } from '../components';

export const JsChallenge06 = () => {
  return (
    <section class={containerStyle.container} data-js-challenge="06">
      <h1>JS Challenge 06: Copy to clipboard button</h1>
      <div class={style.formGroup} data-js-copy-to-clipboard>
        <input type="text" data-js-input placeholder="Type something to copy" class={style.input} />
        <button type="button" data-tooltip="Copy" data-js-button class={style.button}>
          <ClipboardIcon />
        </button>
      </div>
    </section>
  );
};
