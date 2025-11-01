import { debounce } from '@shared/model';
import style from '../ui/style.module.scss';
import type { ComboboxConfig, ComboboxItem } from './combobox.model';
import { Html } from '@kitajs/html';
import { MoviesList } from '../components';

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

class Combobox<T extends ComboboxItem> {
  container: HTMLElement;
  toggle: HTMLElement | null;
  inputGroup: HTMLElement | null;
  input: HTMLInputElement | null;
  selectedMovie: HTMLElement | null;
  content: HTMLElement | null;

  isOpen = false;
  selectedData: T | null = null;

  boundClickOutside = this.onClickOutside.bind(this);

  config: ComboboxConfig<T> = {
    items: [],
  };
  items: T[] = [];

  listElement: ({ items }: { items: T[] }) => string | JSX.Element = () => '';

  constructor(
    container: HTMLElement,
    listElement: ({ items }: { items: T[] }) => string | JSX.Element,
  ) {
    this.container = container;
    this.toggle = this.container.querySelector<HTMLElement>(elements.toggle);
    this.inputGroup = this.container.querySelector<HTMLElement>(elements.inputGroup);
    this.input = this.container.querySelector<HTMLInputElement>(elements.input);
    this.selectedMovie = this.container.querySelector<HTMLElement>(elements.selectedMovie);
    this.content = this.container.querySelector<HTMLElement>(elements.content);
    this.listElement = listElement;

    this.init();
  }

  private getConfig() {
    const data = this.container.getAttribute('data-js-combobox');
    if (data) {
      try {
        this.config = JSON.parse(data) as ComboboxConfig<T>;
        console.debug('Combobox: Configuration loaded.', this.config);
      } catch (error) {
        console.error('Combobox: Invalid JSON configuration.', error);
      }
    }
  }

  private open() {
    this.isOpen = true;
    this.container.classList.add(classes.open);
    if (this.selectedData === null) {
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

  private getItems() {
    if (this.config.items) {
      this.items = this.config.items;
    }
  }

  private onSearch(e: Event) {
    const { value } = e.target as HTMLInputElement;
    if (this.items.length > 0) {
      const filteredItems = this.items.filter(item =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      if (!this.content) {
        console.error('Combobox: Content element not found.');
        return;
      }
      this.content.innerHTML = Html.createElement(
        this.listElement,
        { items: filteredItems },
      ).toString();
    }
  }

  private init() {
    this.getConfig();
    this.getItems();

    this.toggle?.addEventListener('click', this.onToggle.bind(this));
    this.input?.addEventListener(
      'input',
      debounce(this.onSearch.bind(this), this.config.debounceTime ?? 300)
    );
  }
}

document.querySelectorAll<HTMLElement>(elements.combobox).forEach((comboboxElement) => {
  new Combobox(comboboxElement, MoviesList);
});
