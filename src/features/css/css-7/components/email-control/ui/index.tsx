// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import style from './style.module.scss';

interface EmailControlProps {
  className?: string[];
  value?: string;
}

export const EmailControl = ({ className = [], value = '' }: EmailControlProps) => {
  return (
    <label class={`${style.formControl} ${className.map((c) => style[c]).join(' ')}`}>
      <span class={style.formControlLabel}>Email address</span>
      <input
        placeholder="some@mail.com"
        name="email-1"
        class={style.formControlInput}
        type="email"
        value={value}
        required
      />
    </label>
  );
};
