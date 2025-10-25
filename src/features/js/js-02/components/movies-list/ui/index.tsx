// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import { Movie } from '../..';
import style from './style.module.scss';
import { type Movie as MovieType } from '../../../model';

interface MoviesListProps {
  movies: MovieType[];
}

export const MoviesList = ({
  movies,
}: MoviesListProps) => {
  return (
    <ul class={style.movies}>
      {movies.map((movie) => (
        <li
          class={style.moviesItem}
          data-js-movie-item={JSON.stringify(movie)}
        >
          <Movie
            {...movie}
          />
        </li>
      ))}
    </ul>
  );
};