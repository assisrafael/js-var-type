import { isNull, isFunction, isDefined, isUndefined, isNullLike } from '../src/basic';

test('isUndefined', () => {
  expect(isUndefined(undefined)).toBeTruthy();
  expect(isUndefined(null)).toBeFalsy();
  expect(isUndefined(false)).toBeFalsy();
  expect(isUndefined({})).toBeFalsy();
  expect(isUndefined([])).toBeFalsy();
  expect(isUndefined('')).toBeFalsy();
  expect(isUndefined(6)).toBeFalsy();
});

test('isDefined', () => {
  expect(isDefined(undefined)).toBeFalsy();
  expect(isDefined(null)).toBeTruthy();
  expect(isDefined({})).toBeTruthy();
  expect(isDefined([])).toBeTruthy();
  expect(isDefined('')).toBeTruthy();
  expect(isDefined(6)).toBeTruthy();
});

test('isNull', () => {
  expect(isNull(null)).toBeTruthy();
  expect(isNull(undefined)).toBeFalsy();
  expect(isNull({})).toBeFalsy();
  expect(isNull([])).toBeFalsy();
  expect(isNull('')).toBeFalsy();
  expect(isNull(6)).toBeFalsy();
});

test('isNullLike', () => {
  expect(isNullLike(null)).toBeTruthy();
  expect(isNullLike(undefined)).toBeTruthy();
  expect(isNullLike({})).toBeFalsy();
  expect(isNullLike([])).toBeFalsy();
  expect(isNullLike('')).toBeFalsy();
  expect(isNullLike(6)).toBeFalsy();
});

test('isFunction', () => {
  expect(isFunction(function () {})).toBeTruthy();
  expect(isFunction(() => {})).toBeTruthy();
  expect(isFunction(undefined)).toBeFalsy();
  expect(isFunction(null)).toBeFalsy();
  expect(isFunction({})).toBeFalsy();
  expect(isFunction(new Number(3))).toBeFalsy();
  expect(isFunction(/abc/)).toBeFalsy();
  expect(isFunction(true)).toBeFalsy();
  expect(isFunction([])).toBeFalsy();
  expect(isFunction('')).toBeFalsy();
  expect(isFunction(6)).toBeFalsy();
});
