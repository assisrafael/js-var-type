import { isString } from './string.js';

export function isDate(value) {
  return Object.prototype.toString.call(value) === '[object Date]';
}

export function isDateString(value) {
  if (!isString(value)) {
    return false;
  }

  if (value.length !== 10) {
    return false;
  }

  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

export function isDateISOString(value) {
  if (!isString(value)) {
    return false;
  }

  if (value.length !== 24) {
    return false;
  }

  return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(value);
}

export function isDateLike(value) {
  return isDate(value) || isDateISOString(value);
}
