// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import style from './style.module.scss';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  label: string;
}

export const Button = ({ type = 'button', label }: ButtonProps) => {
  return (
    <button class={style.button} type={type}>
      {label}
    </button>
  );
};
