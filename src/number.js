export function isNumber(value) {
  return typeof value === 'number';
}

export function isInRange(value, { min, max }) {
  return value >= min && value <= max;
}

export function isFinite(value) {
  // eslint-disable-next-line no-undef
  return isNumber(value) && globalThis.isFinite(value);
}

export function isInteger(value) {
  return isNumber(value) && value === parseInt(value, 10);
}

export function isSafeInteger(value) {
  return isInteger(value) && value >= -Number.MAX_SAFE_INTEGER && value <= Number.MAX_SAFE_INTEGER;
}

export function isNatural(value) {
  return isInteger(value) && value >= 0;
}
