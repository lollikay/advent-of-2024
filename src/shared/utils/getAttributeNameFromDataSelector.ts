export const getAttributeNameFromAttributeSelector = (dataSelector: string): string => {
  if (!dataSelector) return '';

  const s = dataSelector.trim();

  const inner = (s.startsWith('[') && s.endsWith(']')) ? s.slice(1, -1).trim() : s;

  // attribute selector may include an operator/value, e.g. data-foo="bar" or data-foo~=value
  // capture the attribute name up to any operator or whitespace
  const match = inner.match(/^([^^$*~|\s=\]]+)/);
  return match ? match[1] : inner;
};
