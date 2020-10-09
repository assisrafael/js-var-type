import { isString } from './string.js';

export function isBoolean(value) {
  return typeof value === 'boolean';
}

export function isBooleanLike(value) {
  return isBoolean(value) || isTrueString(value) || isFalseString(value);
}

export function isTrueLike(value) {
  if (isBoolean(value)) {
    return value;
  }

  return isTrueString(value);
}

export function isFalseLike(value) {
  if (isBoolean(value)) {
    return !value;
  }

  return isFalseString(value);
}

export function isTrueString(value) {
  return isString(value) && value.toLowerCase() === 'true';
}

export function isFalseString(value) {
  return isString(value) && value.toLowerCase() === 'false';
}
