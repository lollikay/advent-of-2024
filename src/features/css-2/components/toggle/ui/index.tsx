// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import { LabelPosition } from '../model/label-position.model.ts';
import './style.scss';

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
    <label class={`toggle ${className}`}>
      {label && labelPosition === LabelPosition.LEFT && label}
      <input
        type="checkbox"
        class="toggle-checkbox"
        checked={checked}
        disabled={disabled}
      />
      <span class="toggle-element"></span>
      {label && labelPosition === LabelPosition.RIGHT && label}
    </label>
  );
};
