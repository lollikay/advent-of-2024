// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import '@shared/ui/container/style.scss';
import style from './style.module.scss';

export const CssChallenge23 = () => {
  return (
    <section class="container">
      <h1>CSS Challenge 23: Hamburger</h1>
      <nav class={style.menu}>
        <label class={style.toggle} aria-label="Toggle menu">
          <input type="checkbox" />
          <span class={style.toggleIcon}></span>
        </label>
        <ul class={style.list}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </section>
  );
};
