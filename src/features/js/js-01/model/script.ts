import style from '../ui/style.module.scss';
import eyeIconStyle from '../components/eye-icon/ui/style.module.scss';
import { destroyChallengeEventName } from '@shared/model';
import { jsChallengeAttribute } from '@shared/model/constants';

const selectors = Object.freeze({
  actionButton: '[data-js-action]',
  inputGroup: '[data-js-input-group]',
  input: '[data-js-input]',
  iconEye: '[data-js-icon="eye"]',
});

const entrySelector = `[${jsChallengeAttribute}="01"] ${selectors.actionButton}`;

const togglePassword = (event: Event) => {
  const button = event.currentTarget;
  if(!(button instanceof HTMLButtonElement)) {
    console.error('Event target is not a button element');
    return;
  }
  const inputGroup = button.closest(selectors.inputGroup);
  if (!(inputGroup instanceof HTMLElement)) {
    console.error('Input group not found');
    return;
  }
  inputGroup.classList.toggle(style.passwordRevealed);
  const input = inputGroup.querySelector(selectors.input);
  if (!(input instanceof HTMLInputElement)) {
    console.error('Input element not found or is not an input element');
    return;
  }
  if (input.type === 'password') {
    input.type = 'text';
    button.title = 'Hide password';
  } else {
    input.type = 'password';
    button.title = 'Show password';
  }
  const eyeIcon = button.querySelector(selectors.iconEye);
  if (!(eyeIcon instanceof SVGElement)) {
    console.error('Eye icon not found or is not an SVG element');
    return;
  }
  eyeIcon.classList.toggle(eyeIconStyle.closed);
};

export const init = () => {
  const button = document.querySelector(entrySelector);
  if (button) {
    button.addEventListener('click', togglePassword);
  }
};

document.addEventListener(destroyChallengeEventName, () => {
  const button = document.querySelector(entrySelector);
  if (button) {
    button.removeEventListener('click', togglePassword);
  }
});