// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import containerStyle from '@shared/ui/container/style.module.scss';
import { MoviesList } from '../components';
import { TextContent } from '@features/text-content/ui';
import type { ComboboxConfig, Movie as MovieType } from '../model';
import { Combobox } from '../components/combobox/ui';

const movies = [
  {
    id: 1,
    title: "It's a Wonderful Life",
    year: 1946,
    cover: '/assets/images/js-challenge-02/its-a-wonderful-life.png',
  },
  {
    id: 2,
    title: 'A Christmas Carol',
    year: 1951,
    cover: '/assets/images/js-challenge-02/christmas-carol.png',
  },
  {
    id: 3,
    title: 'Home Alone',
    year: 1990,
    cover: '/assets/images/js-challenge-02/home-alone.png',
  },
  {
    id: 4,
    title: 'Rudolph the Red-Nosed Reindeer',
    year: 1964,
    cover: '/assets/images/js-challenge-02/rudolph-the-red-nosed-reindeer.png',
  },
  {
    id: 5,
    title: "National Lampoon's Christmas Vacation",
    year: 1989,
    cover: null,
  },
  {
    id: 6,
    title: 'Die Hard',
    year: 1988,
    cover: '/assets/images/js-challenge-02/die-hard.png',
  },
];

export const JsChallenge02 = () => {
  const config: ComboboxConfig<MovieType> = {
    items: movies,
  };

  return (
    <section class={containerStyle.container} data-js-challenge="02">
      <h1>JS Challenge 02: Combobox</h1>
      <Combobox config={config} label="Your favorite Christmas movie">
        <MoviesList items={movies} />
      </Combobox>
      <TextContent />
    </section>
  );
};
