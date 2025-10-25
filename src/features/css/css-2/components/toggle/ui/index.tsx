// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import { LabelPosition } from '../model/label-position.model.ts';
import style from './style.module.scss';

interface ToggleProps {
  checked: boolean;
  disabled?: boolean;
  label?: string;
  labelPosition?: LabelPosition;
  className?: string;
}

export const Toggle = ({
  checked,
  disabled,
  label,
  labelPosition = LabelPosition.LEFT,
  className = '',
}: ToggleProps) => {
  return (
    <label class={`${style.toggle} ${style[className]}`}>
      {label && labelPosition === LabelPosition.LEFT && label}
      <input
        type="checkbox"
        class={style.toggleCheckbox}
        checked={checked}
        disabled={disabled}
      />
      <span class={style.toggleElement}></span>
      {label && labelPosition === LabelPosition.RIGHT && label}
    </label>
  );
};
