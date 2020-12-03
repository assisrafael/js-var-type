import { isNullLike } from './basic.js';

export function isString(value) {
  return typeof value === 'string';
}

export function isEmptyString(value) {
  return isString(value) && value.length === 0;
}

export function isEmptyStringLike(value) {
  return isNullLike(value) || isEmptyString(value);
}

export function isNonEmptyString(value) {
  return isString(value) && value.length > 0;
}

export function isChar(value) {
  return isString(value) && value.length === 1;
}

export function isDigit(char) {
  return isChar(char) && /\d/.test(char);
}
