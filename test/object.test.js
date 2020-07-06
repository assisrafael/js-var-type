import { isObject, isPlainObject } from '../src/object';

test('isObject', () => {
  expect(isObject({})).toBeTruthy();
  expect(isObject(new Object())).toBeTruthy();
  expect(isObject(new Number(4))).toBeTruthy();
  expect(isObject(new Date())).toBeTruthy();
  expect(isObject(null)).toBeFalsy();
  expect(isObject(undefined)).toBeFalsy();
  expect(isObject('')).toBeFalsy();
  expect(isObject(1)).toBeFalsy();
});

test('isPlainObject', () => {
  expect(isPlainObject({})).toBeTruthy();
  expect(isPlainObject(new Object())).toBeTruthy();
  expect(isPlainObject(new Number(4))).toBeFalsy();
  expect(isPlainObject(new Date())).toBeFalsy();
  expect(isPlainObject(null)).toBeFalsy();
  expect(isPlainObject(undefined)).toBeFalsy();
  expect(isPlainObject('')).toBeFalsy();
  expect(isPlainObject(1)).toBeFalsy();
});
