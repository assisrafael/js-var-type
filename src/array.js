export function isArray(value) {
  return Array.isArray(value);
}

export function isEmptyArray(value) {
  return isArray(value) && value.length === 0;
}
