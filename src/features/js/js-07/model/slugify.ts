export const slugify = (value: string): string => {
  return value
    .toLocaleLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]+/gu, '');
};
