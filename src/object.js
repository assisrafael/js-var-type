import { isArray, isEmptyArray } from './array.js';
import { isNull, isNullLike } from './basic.js';
import { isBoolean } from './boolean.js';
import { isNumber } from './number.js';
import { isEmptyStringLike, isString } from './string.js';

export function isObject(value) {
  return typeof value == 'object' && !isNull(value) && !isArray(value);
}

export function isPlainObject(value) {
  return isObject(value) && value.constructor == Object;
}

export function isEmptyObject(value) {
  return isPlainObject(value) && Object.keys(value).length === 0;
}

export function isEmptyLike(value) {
  return isEmptyStringLike(value) || isEmptyArray(value) || isEmptyObject(value);
}

export function isPrimitive(value) {
  return isString(value) || isNumber(value) || isBoolean(value) || isNullLike(value);
}
