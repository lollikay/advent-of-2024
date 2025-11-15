import { TagContents } from '../components';
import style from '../ui/style.module.scss';
import { Html } from '@kitajs/html';

const selectors = Object.freeze({
  container: '[data-js-input-tags]',
  input: '[data-js-input]',
  tag: '[data-js-input-tag]',
  removeButton: '[data-js-input-tag-remove]',
});

class TagsInput {
  private inputEl: HTMLDivElement | null = null;

  constructor(private container: Element) {
    this.inputEl = container.querySelector<HTMLDivElement>(selectors.input);

    this.init();
  }

  private inputToTag(input: string): void {
    if (!this.inputEl) return;

    const tag = document.createElement('span');
    tag.innerHTML = Html.createElement(TagContents, {
      text: input,
    }).toString();
    tag.contentEditable = 'false';
    tag.className = style.tag;
    tag.dataset.jsInputTag = '';

    this.inputEl.appendChild(tag);
  }

  private processInitialInput() {
    if (!this.inputEl) return;

    const text = this.inputEl.textContent || '';
    const parts = text.split(',');

    this.inputEl.innerHTML = '';

    parts.forEach((part) => {
      const trimmed = part.trim();
      if (trimmed) {
        this.inputToTag(trimmed);
      }
    });
  }

  private setCursorToEnd(element: HTMLDivElement) {
    const sel = window.getSelection();
    if (!sel) return;
    sel.selectAllChildren(element);
    sel.collapseToEnd();
  }

  private onInput(e: Event) {
    const target = e.target as HTMLDivElement;
    const text = target.innerText || '';

    if (!text.endsWith(',')) {
      return;
    }
    
    let newTagText = '';
    const lastChildNode = target.lastChild;
    if (lastChildNode && lastChildNode.nodeType === Node.TEXT_NODE) {
      newTagText = lastChildNode.textContent?.replace(/,+$/, '').trim() || '';
      if (newTagText) {
        this.inputToTag(newTagText);
      }
      target.removeChild(lastChildNode);
      this.setCursorToEnd(target);
    }
  }

  private onRemoveButtonClick(e: Event) {
    const target = e.target as HTMLElement;
    const removeButton = target.closest(selectors.removeButton);
    if (!removeButton) {
      return;
    }
    const tag = target.closest(selectors.tag);
    if (tag && this.inputEl) {
      this.inputEl.removeChild(tag);
    }
  }

  private init() {
    if (this.inputEl) {
      this.inputEl.addEventListener('input', this.onInput.bind(this));
      this.processInitialInput();
    }
    this.container.addEventListener('click', this.onRemoveButtonClick.bind(this));
  }
}

export const init = () => {
  document.querySelectorAll(selectors.container).forEach((element) => {
    new TagsInput(element);
  });
};
