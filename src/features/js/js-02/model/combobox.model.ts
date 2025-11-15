export interface ComboboxItem {
  id: number;
  title: string;
}

export interface ComboboxConfig<T extends ComboboxItem> {
  url?: string;
  minChars?: number;
  debounceTime?: number;
  items?: T[];
}
