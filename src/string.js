import { isUndefined, isNull } from './basic';
import { isEmptyArray } from './array';
import { isEmptyObject } from './object';

export function isString(value) {
  return typeof value === 'string';
}

export function isEmptyString(value) {
  return isString(value) && value.length === 0;
}

export function isEmptyStringLike(value) {
  return isUndefined(value) || isNull(value) || isEmptyString(value);
}

export function isEmptyLike(value) {
  return isEmptyStringLike(value) || isEmptyArray(value) || isEmptyObject(value);
}
