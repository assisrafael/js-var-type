export function isNumber(value) {
  return typeof value === 'number';
}

export function isInRange(value, { min, max }) {
  return value >= min && value <= max;
}
