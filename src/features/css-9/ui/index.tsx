// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import '@shared/ui/container/style.scss';
import style from './style.module.scss';

export const CssChallenge09 = () => {
  return (
    <>
      <section class="container">
        <h1>CSS Challenge 09: button with gradient border</h1>
        <button
          class={style.button}
        >
          CSS rocks!
        </button>
      </section>
    </>
  )
}