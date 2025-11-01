import { debounce } from '@shared/model';
import style from '../ui/style.module.scss';
import type { ComboboxConfig, ComboboxItem } from './combobox.model';
import { Html } from '@kitajs/html';
import { Movie, MoviesList } from '../components';
import { getAttributeNameFromAttributeSelector } from '@shared/utils';

const elements = Object.freeze({
  combobox: '[data-js-combobox]',
  toggle: '[data-js-combobox-toggle]',
  inputGroup: '[data-js-combobox-input-group]',
  input: '[data-js-combobox-input]',
  button: '[data-js-combobox-button]',
  selected: '[data-js-combobox-selected-item]',
  content: '[data-js-combobox-content]',
  item: '[data-js-combobox-list-item]',
});

const classes = Object.freeze({
  open: style.open,
});

class Combobox<T extends ComboboxItem> {
  container: HTMLElement;
  toggle: HTMLElement | null;
  inputGroup: HTMLElement | null;
  input: HTMLInputElement | null;
  button: HTMLElement | null;
  selected: HTMLElement | null;
  content: HTMLElement | null;

  isOpen = false;
  selectedData: T | null = null;

  boundClickOutsideHandler = this.onClickOutside.bind(this);
  boundClearButtonClickHandler = this.onClearButtonClick.bind(this);

  config: ComboboxConfig<T> = {
    items: [],
  };
  items: T[] = [];

  listElement: ({ items }: { items: T[] }) => string | JSX.Element = () => '';
  itemElement: ({ item }: { item: T }) => string | JSX.Element = () => '';

  constructor({
    container,
    list,
    item
  }: {
    container: HTMLElement,
    list: ({ items }: { items: T[] }) => string | JSX.Element,
    item: ({ item }: { item: T }) => string | JSX.Element,
  }) {
    this.container = container;
    this.toggle = this.container.querySelector<HTMLElement>(elements.toggle);
    this.inputGroup = this.container.querySelector<HTMLElement>(elements.inputGroup);
    this.input = this.container.querySelector<HTMLInputElement>(elements.input);
    this.button = this.container.querySelector<HTMLElement>(elements.button);
    this.selected = this.container.querySelector<HTMLElement>(elements.selected);
    this.content = this.container.querySelector<HTMLElement>(elements.content);
    this.listElement = list;
    this.itemElement = item;

    this.init();
  }

  private getConfig() {
    const data = this.container.getAttribute(getAttributeNameFromAttributeSelector(elements.combobox));
    if (data) {
      try {
        this.config = JSON.parse(data) as ComboboxConfig<T>;
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
    document.addEventListener('click', this.boundClickOutsideHandler);
  }

  private close() {
    this.isOpen = false;
    this.container.classList.remove(classes.open);
    document.removeEventListener('click', this.boundClickOutsideHandler);
    this.content?.classList.add(style.animatedClose);
  }

  private onClickOutside(e: MouseEvent) {
    if (!this.container.contains(e.target as Node)) {
      this.close();
    }
  }

  private onToggle(e: Event) {
    const { target } = e;
    if (this.selectedData) {
      return;
    }
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

  private clearSearch() {
    if (this.input) {
      this.input.value = '';
      this.input.dispatchEvent(new Event('input', { bubbles: true }));
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
      if (filteredItems.length === 0 && value.length) {
        this.content.innerHTML = `<div class="${style.noResults}">No results found</div>`;
        return;
      }
      this.content.innerHTML = Html.createElement(
        this.listElement,
        { items: filteredItems },
      ).toString();
    }
  }

  private clearSelected() {
    this.selectedData = null;
    if (this.selected) {
      this.selected.innerHTML = '';
    }
    this.toggle?.classList.remove(style.hasSelectedItem);
  }

  private onSelectItem(e: Event) {
    const { target } = e;
    const itemElement = (target as HTMLElement).closest(elements.item) as HTMLElement;
    if (!itemElement) {
      return;
    }
    const itemDataAttr = itemElement.getAttribute(getAttributeNameFromAttributeSelector(elements.item));
    if (!itemDataAttr) {
      console.error('Combobox: Selected item data attribute not found.');
      this.clearSelected();
      return;
    }
    let itemData: T;
    try {
      itemData = JSON.parse(itemDataAttr) as T;
    } catch (error) {
      console.error('Combobox: Invalid JSON in selected item data attribute.', error);
      this.clearSelected();
      return;
    }
    this.selectedData = itemData;
    if (!this.selected) {
      return;
    }
    this.toggle?.classList.add(style.hasSelectedItem);
    this.selected.innerHTML = Html.createElement(
      this.itemElement,
      { item: itemData },
    ).toString();
    this.clearSearch();
    this.close();
    this.button?.addEventListener('click', this.boundClearButtonClickHandler);
  }

  private onClearButtonClick(e: Event) {
    e.stopPropagation();
    this.clearSelected();
    this.open();
    this.button?.removeEventListener('click', this.boundClearButtonClickHandler);
  }

  private init() {
    this.getConfig();
    this.getItems();

    this.toggle?.addEventListener('click', this.onToggle.bind(this));
    this.input?.addEventListener(
      'input',
      debounce(this.onSearch.bind(this), this.config.debounceTime ?? 300)
    );
    this.container.addEventListener('click', this.onSelectItem.bind(this));
  }
}

document.querySelectorAll<HTMLElement>(elements.combobox).forEach((comboboxElement) => {
  new Combobox({
    container: comboboxElement,
    list: MoviesList,
    item: Movie,
  });
});
