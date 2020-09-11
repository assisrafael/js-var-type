export function isUndefined(value) {
  return typeof value === 'undefined';
}

export function isDefined(value) {
  return !isUndefined(value);
}

export function isNull(value) {
  return value === null;
}

export function isNullLike(value) {
  return isNull(value) || isUndefined(value);
}
export function isFunction(value) {
  return typeof value === 'function';
}
