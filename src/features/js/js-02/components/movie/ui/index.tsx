// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import style from './style.module.scss';
import type { Movie as MovieType } from '@features/js/js-02/model';

export const Movie = ({
  cover,
  title,
  year
}: MovieType) => {
  return (
    <div class={style.movie}>
      <div class={`${style.movieCover} ${!cover ? style.empty : ''}`}>
        {cover ?
          <img
            src={cover}
            alt={title}
            data-js-movie-cover
          /> :
          <p>No Cover Available</p>
        }
      </div>
      <div class={style.movieInfo}>
        <div
          class={style.movieTitle}
          data-js-movie-title
        >
          {title}
        </div>
        <div
          class={style.movieYear}
          data-js-movie-year
        >
          {year}
        </div>
      </div>
    </div>
  );
}