const selectors = Object.freeze({
  container: '[data-js-persistent-form]',
  input: '[data-js-input]',
  submit: '[data-js-submit]',
});

class PersistentForm {
  constructor(private container: Element) {
    this.init();
  }

  private init() {}
}

export const init = () => {
  document.querySelectorAll(selectors.container).forEach((element) => {
    new PersistentForm(element);
  });
};
