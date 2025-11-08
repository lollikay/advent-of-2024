import { slugify } from "./slugify";

const selectors = Object.freeze({
  container: "[data-js-slug]",
  input: "[data-js-input]",
  output: "[data-js-output]",
});

class SlugGenerator {
  private inputEl: HTMLInputElement | null = null;
  private outputEl: HTMLElement | null = null;

  constructor(container: Element) {
    this.inputEl = container.querySelector<HTMLInputElement>(selectors.input);
    this.outputEl = container.querySelector<HTMLElement>(selectors.output);

    this.init();
  }

  private slugify() {
    if (!this.inputEl || !this.outputEl) {
      return;
    }
    const value = this.inputEl.value;
    if (value === '') {
      this.outputEl.innerHTML = '';
    }
    const transformedValue = slugify(value);
    this.outputEl.innerHTML = '/' + transformedValue;
  }

  private init() {
    if (this.inputEl) {
      this.inputEl.addEventListener('input', this.slugify.bind(this));
      this.slugify();
    }
  }
}

export const init = () => {
  document.querySelectorAll(selectors.container).forEach((element) => {
    new SlugGenerator(element);
  });
};
