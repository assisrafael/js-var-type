import {
  isString,
  isEmptyString,
  isEmptyStringLike,
  isEmptyLike,
  isDigit,
  isChar,
  isNonEmptyString,
} from '../src/string';

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

test('isNonEmptyString', () => {
  expect(isNonEmptyString('l')).toBeTruthy();
  expect(isNonEmptyString('lorem ipsum')).toBeTruthy();
  expect(isNonEmptyString('')).toBeFalsy();
  expect(isNonEmptyString(null)).toBeFalsy();
  expect(isNonEmptyString(undefined)).toBeFalsy();
  expect(isNonEmptyString({})).toBeFalsy();
  expect(isNonEmptyString([])).toBeFalsy();
});

test('isChar', () => {
  expect(isChar('l')).toBeTruthy();
  expect(isChar('Z')).toBeTruthy();
  expect(isChar('1')).toBeTruthy();
  expect(isChar('')).toBeFalsy();
  expect(isChar('lorem ipsum')).toBeFalsy();
  expect(isChar(1)).toBeFalsy();
  expect(isChar({})).toBeFalsy();
  expect(isChar([])).toBeFalsy();
  expect(isChar(null)).toBeFalsy();
  expect(isChar(undefined)).toBeFalsy();
});

test('isDigit', () => {
  expect(isDigit('1')).toBeTruthy();
  expect(isDigit('7')).toBeTruthy();
  expect(isDigit('')).toBeFalsy();
  expect(isDigit(null)).toBeFalsy();
  expect(isDigit(undefined)).toBeFalsy();
  expect(isDigit({})).toBeFalsy();
  expect(isDigit([])).toBeFalsy();
  expect(isDigit('lorem ipsum')).toBeFalsy();
  expect(isDigit([1, 2, 3])).toBeFalsy();
  expect(isDigit(1)).toBeFalsy();
});
