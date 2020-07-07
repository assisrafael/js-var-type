import { isNull } from './basic';
import { isArray } from './array';

export function isObject(value) {
  return typeof value == 'object' && !isNull(value) && !isArray(value);
}

export function isPlainObject(value) {
  return isObject(value) && value.constructor == Object;
}

export function isEmptyObject(valor) {
  return isPlainObject(valor) && Object.keys(valor).length === 0;
}
