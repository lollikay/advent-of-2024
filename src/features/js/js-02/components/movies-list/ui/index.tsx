// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import style from './style.module.scss';
import { type Movie as MovieType } from '../../../model';
import { MoviesListItem } from '../../movies-list-item/ui';

interface MoviesListProps {
  items: MovieType[];
}

export const MoviesList = ({ items }: MoviesListProps) => {
  return (
    <ul class={style.movies}>
      {items.map((movie) => (
        <MoviesListItem movie={movie} />
      ))}
    </ul>
  );
};
