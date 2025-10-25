import style from '../ui/style.module.scss';
import eyeIconStyle from '../components/eye-icon/ui/style.module.scss';

export const togglePassword = (event: Event) => {
  const button = event.currentTarget;
  if(!(button instanceof HTMLButtonElement)) {
    console.error('Event target is not a button element');
    return;
  }
  const inputGroup = button.closest('[data-js-input-group]');
  if (!(inputGroup instanceof HTMLElement)) {
    console.error('Input group not found');
    return;
  }
  inputGroup.classList.toggle(style.passwordRevealed);
  const input = inputGroup.querySelector('[data-js-input]');
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
  const eyeIcon = button.querySelector('[data-js-icon="eye"]');
  if (!(eyeIcon instanceof SVGElement)) {
    console.error('Eye icon not found or is not an SVG element');
    return;
  }
  eyeIcon.classList.toggle(eyeIconStyle.closed);
};

const button = document.querySelector('#js-challenge-01 [data-js-action]');
if (button) {
  button.addEventListener('click', togglePassword);
}