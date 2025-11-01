// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import style from './style.module.scss';
import type { Movie as MovieType } from '@features/js/js-02/model';

interface MovieProps {
  item: MovieType | null;
}

export const Movie = ({
  item: movie
}: MovieProps) => {
  if (!movie) {
    return '';
  }

  const { title, year, cover } = movie;
  return (
    <div class={style.movie}>
      <div class={`${style.movieCover} ${!cover ? style.empty : ''}`}>
        {cover ?
          <img
            src={cover}
            alt={title}
          /> :
          <p>No Cover Available</p>
        }
      </div>
      <div class={style.movieInfo}>
        <div
          class={style.movieTitle}
        >
          {title}
        </div>
        <div
          class={style.movieYear}
        >
          {year}
        </div>
      </div>
    </div>
  );
}