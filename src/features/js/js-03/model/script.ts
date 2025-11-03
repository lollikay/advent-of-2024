const selector = '[data-js-textarea]';

class ResizableTextarea {
  constructor(
    private element: HTMLTextAreaElement
  ) {
    this.init();
  }

  private adjustHeight() {
    this.element.style.height = 'auto';
    this.element.style.height = `${this.element.scrollHeight}px`;
  }

  onInput = () => {
    this.adjustHeight();
  };
  
  init() {
    this.adjustHeight();
    this.element.addEventListener('input', this.onInput);
  }
}

export const init = () => {
  document.querySelectorAll<HTMLTextAreaElement>(selector)
    .forEach(element => {
      new ResizableTextarea(element)
    });
};
