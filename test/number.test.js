import { isNumber, isInRange } from '../src/number';

test('isNumber', () => {
  expect(isNumber(1)).toBeTruthy();
  expect(isNumber([])).toBeFalsy();
  expect(isNumber(null)).toBeFalsy();
  expect(isNumber(undefined)).toBeFalsy();
  expect(isNumber({})).toBeFalsy();
  expect(isNumber('')).toBeFalsy();
});

test('isInRange', () => {
  expect(isInRange(0, { min: 0, max: 2 })).toBeTruthy();
  expect(isInRange(1, { min: 0, max: 2 })).toBeTruthy();
  expect(isInRange(2, { min: 0, max: 2 })).toBeTruthy();
  expect(isInRange(1.2512, { min: 0, max: 2 })).toBeTruthy();
  expect(isInRange(2.000001, { min: 0, max: 2 })).toBeFalsy();
  expect(isInRange(125125, { min: 0, max: 2 })).toBeFalsy();
  expect(isInRange(-125125, { min: 0, max: 2 })).toBeFalsy();
});
