import { isArray, isEmptyArray } from '../src/array';

test('isArray', () => {
  expect(isArray([])).toBeTruthy();
  expect(isArray(null)).toBeFalsy();
  expect(isArray(undefined)).toBeFalsy();
  expect(isArray({})).toBeFalsy();
  expect(isArray('')).toBeFalsy();
  expect(isArray(1)).toBeFalsy();
});

test('isEmptyArray', () => {
  expect(isEmptyArray([])).toBeTruthy();
  expect(isEmptyArray([1, 2, 3])).toBeFalsy();
  expect(isEmptyArray(null)).toBeFalsy();
  expect(isEmptyArray(undefined)).toBeFalsy();
  expect(isEmptyArray({})).toBeFalsy();
  expect(isEmptyArray('')).toBeFalsy();
  expect(isEmptyArray(1)).toBeFalsy();
});
