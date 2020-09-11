import { isBoolean, isBooleanLike, isFalseString, isTrueLike, isTrueString, isFalseLike } from '../src/boolean';

test('isBoolean', () => {
  expect(isBoolean(false)).toBeTruthy();
  expect(isBoolean(true)).toBeTruthy();
  expect(isBoolean(() => {})).toBeFalsy();
  expect(isBoolean(undefined)).toBeFalsy();
  expect(isBoolean(null)).toBeFalsy();
  expect(isBoolean({})).toBeFalsy();
  expect(isBoolean([])).toBeFalsy();
  expect(isBoolean('')).toBeFalsy();
  expect(isBoolean(6)).toBeFalsy();
});

test('isBooleanLike', () => {
  expect(isBooleanLike(false)).toBeTruthy();
  expect(isBooleanLike(true)).toBeTruthy();
  expect(isBooleanLike('false')).toBeTruthy();
  expect(isBooleanLike('true')).toBeTruthy();
  expect(isBooleanLike('False')).toBeTruthy();
  expect(isBooleanLike('tRUE')).toBeTruthy();
  expect(isBooleanLike(() => {})).toBeFalsy();
  expect(isBooleanLike(undefined)).toBeFalsy();
  expect(isBooleanLike(null)).toBeFalsy();
  expect(isBooleanLike({})).toBeFalsy();
  expect(isBooleanLike([])).toBeFalsy();
  expect(isBooleanLike('')).toBeFalsy();
  expect(isBooleanLike(6)).toBeFalsy();
});

test('isFalseString', () => {
  expect(isFalseString('false')).toBeTruthy();
  expect(isFalseString('FALSE')).toBeTruthy();
  expect(isFalseString(false)).toBeFalsy();
  expect(isFalseString(true)).toBeFalsy();
  expect(isFalseString(() => {})).toBeFalsy();
  expect(isFalseString(undefined)).toBeFalsy();
  expect(isFalseString(null)).toBeFalsy();
  expect(isFalseString({})).toBeFalsy();
  expect(isFalseString([])).toBeFalsy();
  expect(isFalseString('')).toBeFalsy();
  expect(isFalseString(6)).toBeFalsy();
});

test('isTrueString', () => {
  expect(isTrueString('true')).toBeTruthy();
  expect(isTrueString('TRUE')).toBeTruthy();
  expect(isTrueString(false)).toBeFalsy();
  expect(isTrueString(true)).toBeFalsy();
  expect(isTrueString(() => {})).toBeFalsy();
  expect(isTrueString(undefined)).toBeFalsy();
  expect(isTrueString(null)).toBeFalsy();
  expect(isTrueString({})).toBeFalsy();
  expect(isTrueString([])).toBeFalsy();
  expect(isTrueString('')).toBeFalsy();
  expect(isTrueString(6)).toBeFalsy();
});

test('isTrueLike', () => {
  expect(isTrueLike(true)).toBeTruthy();
  expect(isTrueLike('true')).toBeTruthy();
  expect(isTrueLike('TRUE')).toBeTruthy();
  expect(isTrueLike(false)).toBeFalsy();
  expect(isTrueLike('false')).toBeFalsy();
  expect(isTrueLike(() => {})).toBeFalsy();
  expect(isTrueLike(undefined)).toBeFalsy();
  expect(isTrueLike(null)).toBeFalsy();
  expect(isTrueLike({})).toBeFalsy();
  expect(isTrueLike([])).toBeFalsy();
  expect(isTrueLike('')).toBeFalsy();
  expect(isTrueLike(6)).toBeFalsy();
});

test('isFalseLike', () => {
  expect(isFalseLike(false)).toBeTruthy();
  expect(isFalseLike('false')).toBeTruthy();
  expect(isFalseLike('FALSE')).toBeTruthy();
  expect(isFalseLike(true)).toBeFalsy();
  expect(isFalseLike('true')).toBeFalsy();
  expect(isFalseLike(() => {})).toBeFalsy();
  expect(isFalseLike(undefined)).toBeFalsy();
  expect(isFalseLike(null)).toBeFalsy();
  expect(isFalseLike({})).toBeFalsy();
  expect(isFalseLike([])).toBeFalsy();
  expect(isFalseLike('')).toBeFalsy();
  expect(isFalseLike(6)).toBeFalsy();
});
