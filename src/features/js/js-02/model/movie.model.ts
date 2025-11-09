import type { ComboboxItem } from './combobox.model';

export interface Movie extends ComboboxItem {
  year: number;
  cover: string | null;
}
