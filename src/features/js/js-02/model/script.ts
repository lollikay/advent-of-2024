import style from '../ui/style.module.scss';
import type { Movie } from './movie';

const elements = Object.freeze({
  combobox: '[data-js-combobox]',
  toggle: '[data-js-combobox-toggle]',
  inputGroup: '[data-js-combobox-input-group]',
  input: '[data-js-combobox-input]',
  selectedMovie: '[data-js-combobox-selected-movie]',
  content: '[data-js-combobox-content]',
});

const classes = Object.freeze({
  open: style.open,
});

class Combobox {
  container: HTMLElement;
  toggle: HTMLElement | null;
  inputGroup: HTMLElement | null;
  input: HTMLInputElement | null;
  selectedMovie: HTMLElement | null;
  content: HTMLElement | null;

  isOpen = false;
  selectedMovieData: Movie | null = null;

  boundClickOutside = this.onClickOutside.bind(this);

  constructor(
    container: HTMLElement,
  ) {
    this.container = container;
    this.toggle = this.container.querySelector<HTMLElement>(elements.toggle);
    this.inputGroup = this.container.querySelector<HTMLElement>(elements.inputGroup);
    this.input = this.container.querySelector<HTMLInputElement>(elements.input);
    this.selectedMovie = this.container.querySelector<HTMLElement>(elements.selectedMovie);
    this.content = this.container.querySelector<HTMLElement>(elements.content);

    this.init();
  }

  private open() {
    this.isOpen = true;
    this.container.classList.add(classes.open);
    if (this.selectedMovieData === null) {
      this.input?.focus();
    }
    document.addEventListener('click', this.boundClickOutside);
  }

  private close() {
    this.isOpen = false;
    this.container.classList.remove(classes.open);
    document.removeEventListener('click', this.boundClickOutside);
    this.content?.classList.add(style.animatedClose);
  }

  private onClickOutside(e: MouseEvent) {
    if (!this.container.contains(e.target as Node)) {
      this.close();
    }
  }

  private onToggle(e: Event) {
    const { target } = e;
    if (this.isOpen && this.input && target === this.input) {
      return;
    }
    if (this.isOpen) {
      this.close();
      return;
    }
    this.open();
  }

  private init() {
    this.toggle?.addEventListener('click', this.onToggle.bind(this));
  }
}

document.querySelectorAll<HTMLElement>('[data-js-combobox]').forEach((comboboxElement) => {
  new Combobox(comboboxElement);
});
