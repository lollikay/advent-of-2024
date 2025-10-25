// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import containerStyle from '@shared/ui/container/style.module.scss';
import marginStyle from '@shared/ui/margins/style.module.scss';
import style from './style.module.scss';
import { Movie, MoviesList } from '../components';

const movies = [
  {
    id: 1,
    title: "It's a Wonderful Life",
    year: 1946,
    cover: "/assets/images/js-challenge-02/its-a-wonderful-life.png"
  },
  {
    id: 2,
    title: "A Christmas Carol",
    year: 1951,
    cover: "/assets/images/js-challenge-02/christmas-carol.png"
  },
  {
    id: 3,
    title: "Home Alone",
    year: 1990,
    cover: "/assets/images/js-challenge-02/home-alone.png"
  },
  {
    id: 4,
    title: "Rudolph the Red-Nosed Reindeer",
    year: 1964,
    cover: "/assets/images/js-challenge-02/rudolph-the-red-nosed-reindeer.png"
  },
  {
    id: 5,
    title: "National Lampoon's Christmas Vacation",
    year: 1989,
    cover: null,
  },
  {
    id: 6,
    title: "Die Hard",
    year: 1988,
    cover: "/assets/images/js-challenge-02/die-hard.png",
  }
];

export const JsChallenge02 = () => {
  return (
    <section
      id="js-challenge-02"
      class={containerStyle.container}
    >
      <h1>JS Challenge 02: Combobox</h1>
      <div class={`${style.combobox} ${marginStyle.mb5}`}>
        <div class={style.comboboxToggle}>
          <label
            class={style.comboboxInputGroup}
            data-js-combobox-input-group
          >
            <span class={style.comboboxLabel}>
              Your Favorite Holiday Movie
            </span>
            <input
              class={style.comboboxInput}
              type="search"
              data-js-combobox-input
            />
          </label>
          <div
            class={style.comboboxSelectedMovie}
            data-js-combobox-selected-movie
          >
            <Movie
              id={0}
              cover={null}
              title=""
              year={0}
            />
          </div>
        </div>
        <div class={style.comboboxContent}>
          <MoviesList
            movies={movies}
          />
        </div>
      </div>
    </section>
  );
};
