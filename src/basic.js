export function isUndefined(value) {
  return typeof value === 'undefined';
}

export function isDefined(value) {
  return !isUndefined(value);
}

export function isNull(value) {
  return value === null;
}

export function isFunction(value) {
  return typeof value === 'function';
}
