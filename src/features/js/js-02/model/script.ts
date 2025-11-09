import { ComboboxClass, comboboxSelectors, Movie, MoviesList } from '../components';
import { jsChallengeAttribute } from '@shared/model/constants';

const entrySelector = `[${jsChallengeAttribute}="02"] ${comboboxSelectors.combobox}`;

export const init = () => {
  document.querySelectorAll<HTMLElement>(entrySelector).forEach((comboboxElement) => {
    new ComboboxClass({
      container: comboboxElement,
      list: MoviesList,
      item: Movie,
    });
  });
};
