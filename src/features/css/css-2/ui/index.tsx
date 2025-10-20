// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import '@shared/ui/container/style.scss';
import '@shared/ui/margins/style.scss';
import { Toggle } from '../components/toggle/ui/index.tsx';
import { LabelPosition } from '../components/toggle/model/label-position.model.ts';

const toggles = [
  { checked: true, disabled: false, label: '' },
  { checked: false, disabled: false, label: 'Toggle the toggle!' },
  { checked: true, disabled: true, label: 'Toggle the toggle!' },
  { checked: false, disabled: true, label: '' },
];

export const CssChallenge02 = () => {
  return (
    <section class="container">
      <h1>CSS Challenge 02: toggle</h1>
      <h2>Unstyled checkbox</h2>
      <div class="mb-5">
        <input type="checkbox" />
      </div>
      <h2>Original challenge</h2>
      {toggles.map(({ checked, disabled, label }, index) => (
        <div class="mb-5">
          <Toggle
            checked={checked}
            disabled={disabled}
            label={label}
            labelPosition={index % 2 === 0 ? LabelPosition.LEFT : LabelPosition.RIGHT}
          />
        </div>
      ))}
      <h2>Themed toggle</h2>
      {toggles.map(({ checked, disabled, label }, index) => (
        <div class="mb-5">
          <Toggle
            checked={checked}
            disabled={disabled}
            label={label}
            labelPosition={index % 2 === 0 ? LabelPosition.LEFT : LabelPosition.RIGHT}
            className="themed"
          />
        </div>
      ))}
    </section>
  )
}