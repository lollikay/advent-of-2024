// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import style from './style.module.scss';

interface CheckInputProps {
  type?: 'checkbox' | 'radio';
  name: string;
  required?: boolean;
  label: string;
  value: string;
  checked?: boolean;
}

export const CheckInput = ({
  type = 'checkbox',
  name,
  required = false,
  label,
  value,
  checked = false,
}: CheckInputProps) => {
  const className = type === 'checkbox' ? style.checkbox : style.radio;

  return (
    <span class={className}>
      <input
        type={type}
        name={name}
        required={required}
        class={style.input}
        value={value}
        checked={checked}
      />
      <span class={style.checkmark}></span>
      <span class={style.label}>{label}</span>
    </span>
  );
};
