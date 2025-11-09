import style from "../ui/style.module.scss";

const selectors = Object.freeze({
  container: "[data-js-input-tags]",
  input: "[data-js-input]"
});

class TagsInput {
  private inputEl: HTMLDivElement | null = null;

  constructor(container: Element) {
    this.inputEl = container.querySelector<HTMLDivElement>(selectors.input);

    this.init();
  }

  private inputToTag(input: string): void {
    if (!this.inputEl) return;

    const tag = document.createElement("button");
    tag.textContent = input;
    tag.contentEditable = "false";
    tag.className = style.tag;

    this.inputEl.appendChild(tag);
    this.inputEl.appendChild(document.createTextNode(" "));
  }

  private processInitialInput() {
    if (!this.inputEl) return;

    const text = this.inputEl.textContent || "";
    const parts = text.split(",");

    this.inputEl.innerHTML = "";

    parts.forEach((part) => {
      const trimmed = part.trim();
      if (trimmed) {
        this.inputToTag(trimmed);
      }
    });
  }

  private onInput(e: Event) {
    console.debug("Input event:", e);
  }

  private init() {
    if (this.inputEl) {
      this.inputEl.addEventListener("input", this.onInput.bind(this));
      this.processInitialInput();
    }
  }
}

export const init = () => {
  document.querySelectorAll(selectors.container).forEach((element) => {
    new TagsInput(element);
  });
};
