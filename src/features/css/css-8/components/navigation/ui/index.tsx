// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import style from './style.module.scss';

export const Navigation = () => {
  return (
    <nav class={style.navigation}>
      <ul>
        <li>
          <a href="https://www.adventofcss.com/" target="_blank">
            Advent of CSS
          </a>
        </li>
        <li>
          <a href="https://www.adventofjs.com/" target="_blank">
            Advent of JS
          </a>
        </li>
      </ul>
    </nav>
  );
};
