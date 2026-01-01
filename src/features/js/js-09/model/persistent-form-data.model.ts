import { controlNames } from './data';

export interface PersistentFormData {
  [controlNames.fullName]: string;
  [controlNames.email]: string;
  [controlNames.reindeer]: string;
  [controlNames.movies]: string[];
}