import { isString, isEmptyString, isEmptyStringLike, isEmptyLike } from '../src/string';

test('isString', () => {
  expect(isString('')).toBeTruthy();
  expect(isString('lorem ipsum')).toBeTruthy();
  expect(isString(null)).toBeFalsy();
  expect(isString(undefined)).toBeFalsy();
  expect(isString({})).toBeFalsy();
  expect(isString([])).toBeFalsy();
  expect(isString(6)).toBeFalsy();
});

test('isEmptyString', () => {
  expect(isEmptyString('')).toBeTruthy();
  expect(isEmptyString('lorem ipsum')).toBeFalsy();
  expect(isEmptyString(null)).toBeFalsy();
  expect(isEmptyString(undefined)).toBeFalsy();
  expect(isEmptyString({})).toBeFalsy();
  expect(isEmptyString([])).toBeFalsy();
});

test('isEmptyStringLike', () => {
  expect(isEmptyStringLike('')).toBeTruthy();
  expect(isEmptyStringLike(null)).toBeTruthy();
  expect(isEmptyStringLike(undefined)).toBeTruthy();
  expect(isEmptyStringLike('lorem ipsum')).toBeFalsy();
  expect(isEmptyStringLike({})).toBeFalsy();
  expect(isEmptyStringLike([])).toBeFalsy();
});

test('isEmptyLike', () => {
  expect(isEmptyLike('')).toBeTruthy();
  expect(isEmptyLike(null)).toBeTruthy();
  expect(isEmptyLike(undefined)).toBeTruthy();
  expect(isEmptyLike({})).toBeTruthy();
  expect(isEmptyLike([])).toBeTruthy();
  expect(isEmptyLike('lorem ipsum')).toBeFalsy();
  expect(isEmptyLike([1, 2, 3])).toBeFalsy();
  expect(isEmptyLike({ a: 1 })).toBeFalsy();
});
