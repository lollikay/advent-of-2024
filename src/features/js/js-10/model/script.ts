import { jsChallengeAttribute } from '@shared/model/constants';
import style from '../ui/style.module.scss';

const selectors = Object.freeze({
  container: `[${jsChallengeAttribute}="10"]`,
  toggle: '[data-js-toggle]',
});

const classes = {
  opened: style.opened
}

class FloatingButtons {
  private container: HTMLDivElement | null = null;
  private toggleEl: HTMLButtonElement | null = null;

  constructor(container: HTMLDivElement) {
    this.container = container;
    this.toggleEl = container.querySelector<HTMLButtonElement>(selectors.toggle);

    this.init();
  }

  private init() {
    if (this.toggleEl) {
      this.toggleEl.addEventListener('click', this.toggleButtons.bind(this));
    }
  }

  private toggleButtons() {
    this.container?.classList.toggle(classes.opened);
  }
}

export const init = () => {
  document.querySelectorAll<HTMLDivElement>(selectors.container).forEach((element) => {
    new FloatingButtons(element);
  });
};
