// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import style from './style.module.scss';

interface LabelProps {
  label: string;
  required?: boolean;
  controlName: string;
}

export const Label = ({ label, required = false, controlName }: LabelProps) => {
  return (
    <label class={style.label} for={controlName}>
      {label}
      {required && '*'}
    </label>
  );
};
