import { isNull } from "./basic";

export function isObject(value) {
  return !isNull(value) && typeof value == "object";
}

export function isPlainObject(value) {
  return isObject(value) && value.constructor == Object;
}

export function isEmptyObject(valor) {
  return isPlainObject(valor) && Object.keys(valor).length === 0;
}
