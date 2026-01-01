import { controlNames } from './data';
import { LocalStorageService } from "@shared/model";
import type { PersistentFormData } from "./persistent-form-data.model";

const selectors = Object.freeze({
  container: '[data-js-persistent-form]',
  input: '[data-js-input]',
  button: '[data-js-button]',
});

class PersistentForm extends LocalStorageService<PersistentFormData> {
  data: PersistentFormData = {
    [controlNames.fullName]: '',
    [controlNames.email]: '',
    [controlNames.reindeer]: '',
    [controlNames.movies]: [],
  };
  inputs: NodeListOf<HTMLInputElement>;

  constructor(
    private container: Element,
    private storageKey: string = 'persistentFormData'
  ) {
    super();

    this.inputs = this.container.querySelectorAll<HTMLInputElement>(selectors.input);

    this.init();
  }

  private handleInputChange(event: Event) {

    this.saveFormData();
  }

  private handleFormSubmit(event: Event) {
    event.preventDefault();
    this.clearData(this.storageKey);
    (event.target as HTMLFormElement).reset();
  }

  private saveFormData() {
    const formData: Record<string, string | string[]> = {};
    const inputs = this.container.querySelectorAll<HTMLInputElement>(selectors.input);

    inputs.forEach((input) => {
      if (input.type === 'checkbox') {
        if (!formData[input.name]) {
          formData[input.name] = [];
        }
        if (input.checked) {
          (formData[input.name] as string[]).push(input.value);
        }
      } else if (input.type === 'radio') {
        if (input.checked) {
          formData[input.name] = input.value;
        }
      } else {
        formData[input.name] = input.value;
      }
    });


    this.saveData(this.storageKey, formData as unknown as PersistentFormData);
  }

  private loadFormData() {
    const data = this.getData(this.storageKey);
    if (!data) return;
    
    this.data = data;

    this.inputs.forEach((input) => {
      const value = this.data[input.name as keyof PersistentFormData];
      if (value === null || value === undefined) {
        return;
      }
      if (input.type === 'checkbox' && Array.isArray(value)) {
        input.checked = value.includes(input.value);
        return;
      }
      if (input.type === 'radio' && typeof value === 'string') {
        input.checked = input.value === value;
        return;
      }
      if (typeof value === 'string') {
        input.value = value;
        return;
      }
    });
  }

  private init() {
    this.container.addEventListener('change', this.handleInputChange.bind(this));
    this.container.addEventListener('submit', this.handleFormSubmit.bind(this));

    this.loadFormData();
  }
}

export const init = () => {
  document.querySelectorAll(selectors.container).forEach((element) => {
    new PersistentForm(element, 'challenge09');
  });
};
