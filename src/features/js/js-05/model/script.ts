import { jsChallengeAttribute } from "@shared/model/constants";

const selectors = Object.freeze({
  container: `[${jsChallengeAttribute}="05"]`,
  input: "[data-js-character-counter]",
  output: "[data-js-character-count]",
});

class CharacterCounter {
  private inputEl: HTMLTextAreaElement | null = null;
  private outputEl: HTMLElement | null = null;

  constructor(container: Element) {
    this.inputEl = container.querySelector<HTMLTextAreaElement>(selectors.input);
    this.outputEl = container.querySelector<HTMLElement>(selectors.output);

    this.init();
  }

  private init() {
    if (this.inputEl) {
      this.inputEl.addEventListener('input', this.updateCount.bind(this));
    }
    this.updateCount();
  }

  private updateCount() {
    if (this.inputEl && this.outputEl) {
      const characterCount = this.inputEl.value.length;
      this.outputEl.textContent = characterCount.toString();
    }
  }
}

export const init = () => {
  document.querySelectorAll(selectors.container).forEach((element) => {
    new CharacterCounter(element);
  });
};
