// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import containerStyle from '@shared/ui/container/style.module.scss';
import marginStyle from '@shared/ui/margins/style.module.scss';
import style from './style.module.scss';
import { Movie, MoviesList } from '../components';
import { TextContent } from '@features/text-content/ui';

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
      <div
        class={`${style.combobox} ${marginStyle.mb5}`}
        data-js-combobox
      >
        <div
          class={style.comboboxToggle}
          data-js-combobox-toggle
        >
          <div
            class={style.comboboxInputGroup}
            data-js-combobox-input-group
          >
            <label class={style.comboboxLabel}>
              Your Favorite Holiday Movie
            </label>
            <input
              class={style.comboboxInput}
              type="search"
              data-js-combobox-input
            />
          </div>
          <div
            class={style.comboboxSelectedMovie}
            data-js-combobox-selected-movie
          >
            <Movie
              movie={null}
            />
          </div>
        </div>
        <div
          class={style.comboboxContent}
          data-js-combobox-content
        >
          <MoviesList
            movies={movies}
          />
        </div>
      </div>
      <TextContent />
    </section>
  );
};
