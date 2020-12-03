import { isArray } from './array.js';
import { isBoolean } from './boolean.js';
import { isNull, isUndefined } from './basic.js';
import { isNumber } from './number.js';
import { isString } from './string.js';

export function isObject(value) {
  return typeof value == 'object' && !isNull(value) && !isArray(value);
}

export function isPlainObject(value) {
  return isObject(value) && value.constructor == Object;
}

export function isEmptyObject(value) {
  return isPlainObject(value) && Object.keys(value).length === 0;
}

export function isPrimitive(value) {
  return isString(value) || isNumber(value) || isBoolean(value) || isNull(value) || isUndefined(value);
}
