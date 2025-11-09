// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import { Movie } from '../../movie/ui';
import style from './style.module.scss';
import { type Movie as MovieType } from '../../../model';

interface MoviesListItemProps {
  movie: MovieType;
}

export const MoviesListItem = ({ movie }: MoviesListItemProps) => {
  return (
    <li class={style.moviesItem} data-js-combobox-list-item={JSON.stringify(movie)}>
      <Movie item={movie} />
    </li>
  );
};
