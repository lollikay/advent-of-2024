import style from '../ui/style.module.scss';

const COPIED_STATE_DURATION_MS = 5000;

const selectors = Object.freeze({
  container: "[data-js-copy-to-clipboard]",
  input: "[data-js-input]",
  button: "[data-js-button]",
});

const buttonTooltips = Object.freeze({
  copy: "Copy",
  copied: "Copied!",
});

class CopyToClipboardFromInput {
  private input: HTMLInputElement | null;
  private button: HTMLButtonElement | null;
  private isCopying: boolean = false;

  constructor(
    private container: HTMLElement
  ) {
    this.input = this.container.querySelector<HTMLInputElement>(selectors.input);
    this.button = this.container.querySelector<HTMLButtonElement>(selectors.button);

    this.init();
  }

  private async copyTextToClipboard(text: string) {
    this.isCopying = true;
    try {
      await navigator.clipboard.writeText(text);
      this.updateButton();
    } catch (error) {
      console.error("Failed to copy text to clipboard:", error);
      this.isCopying = false;
    }
  }

  private updateButtonTooltip(text: string) {
    if (this.button) {
      this.button.setAttribute("data-tooltip", text);
    }
  }

  private updateButton() {
    if (!this.button) {
      this.isCopying = false;
      return;
    }
    this.button.classList.add(style.copied);
    this.updateButtonTooltip(buttonTooltips.copied);
    
    setTimeout(() => {
      this.button?.classList.remove(style.copied);
      this.updateButtonTooltip(buttonTooltips.copy);
      this.isCopying = false;
    }, COPIED_STATE_DURATION_MS);
  }

  private playEmptyAnimation() {
    this.container.classList.add(style.empty);
    this.container.addEventListener("animationend", () => {
      this.container.classList.remove(style.empty);
    }, { once: true });
  }

  private async onCopyButtonClick() {
    if (this.isCopying) {
      return;
    }
    if (this.input) {
      const text = this.input.value;
      if (text === "") {
        this.playEmptyAnimation();
        return;
      }
      await this.copyTextToClipboard(text);
    }
  }

  private init() {
    this.button?.addEventListener("click", this.onCopyButtonClick.bind(this));
  }
}

export const init = () => {
  document.querySelectorAll(selectors.container).forEach((element) => {
    new CopyToClipboardFromInput(element as HTMLElement);
  });
};
