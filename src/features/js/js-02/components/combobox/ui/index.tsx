// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import type { ComboboxConfig, ComboboxItem } from '@features/js/js-02/model';
import style from './style.module.scss';
import marginStyle from '@shared/ui/margins/style.module.scss';

export interface ComboboxProps<T extends ComboboxItem> {
  config: ComboboxConfig<T>;
  label?: string;
  children?: JSX.Element | string;
}

export function Combobox<T extends ComboboxItem>({
  config,
  label = 'Select an option',
  children
}: ComboboxProps<T>) {
  return (
    <div
      class={`${style.combobox} ${marginStyle.mb5}`}
      data-js-combobox={JSON.stringify(config)}
    >
      <div
        class={style.comboboxToggle}
        data-js-combobox-toggle
      >
        <div
          class={style.comboboxInputGroup}
          data-js-combobox-input-group
        >
          <label class={style.comboboxLabel}>
            {label}
          </label>
          <input
            class={style.comboboxInput}
            type="search"
            data-js-combobox-input
            placeholder={label}
          />
          <button
            class={style.comboboxButton}
            type="button"
            title="Toggle Combobox"
            aria-label="Toggle Combobox"
            data-js-combobox-button
          ></button>
        </div>
        <div
          class={style.comboboxSelectedItem}
          data-js-combobox-selected-item
        >
        </div>
      </div>
      <div
        class={style.comboboxContent}
        data-js-combobox-content
      >
        {children}
      </div>
    </div>
  );
}
