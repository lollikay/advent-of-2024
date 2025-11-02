// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import containerStyle from '@shared/ui/container/style.module.scss';
import style from './style.module.scss';

export const JsChallenge03 = () => {
  return (
    <section
      id="js-challenge-03"
      class={containerStyle.container}
    >
      <h1>JS Challenge 03: Growing textarea</h1>
      <form>
        <textarea
          class={style.textarea}
          placeholder="Type something..."
          rows="1"
          data-js-textarea
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </textarea>
      </form>
    </section>
  );
};
