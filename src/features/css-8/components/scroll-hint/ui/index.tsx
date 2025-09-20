// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import style from './style.module.scss';

export const ScrollHint = () => {
  return (
    <div class={style.hint}>
      <img
        src="/assets/images/css-challenge-08/arrow-down.svg"
        class={style.icon}
        alt=""
      />
      <span class={style.text}>Scroll</span>
      <img
        src="/assets/images/css-challenge-08/arrow-down.svg"
        class={style.icon}
        alt=""
      />
    </div>
  )
};