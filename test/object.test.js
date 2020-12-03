import { isObject, isPlainObject, isPrimitive } from '../src/object';

test('isObject', () => {
  expect(isObject({})).toBeTruthy();
  expect(isObject(new Object())).toBeTruthy();
  expect(isObject(new Number(4))).toBeTruthy();
  expect(isObject(new Date())).toBeTruthy();
  expect(isObject(null)).toBeFalsy();
  expect(isObject(undefined)).toBeFalsy();
  expect(isObject('')).toBeFalsy();
  expect(isObject(1)).toBeFalsy();
  expect(isObject([])).toBeFalsy();
});

test('isPlainObject', () => {
  expect(isPlainObject({})).toBeTruthy();
  expect(isPlainObject(new Object())).toBeTruthy();
  expect(isPlainObject(JSON.parse('{"a":{"b":5}}'))).toBeTruthy();
  expect(isPlainObject([1, 2, 3])).toBeFalsy();
  expect(isPlainObject(new Number(4))).toBeFalsy();
  expect(isPlainObject(new Date())).toBeFalsy();
  expect(
    isPlainObject(
      new (function () {
        this.x = 5;
      })()
    )
  ).toBeFalsy();
  expect(
    isPlainObject(
      new (class {
        constructor() {
          this.x = 5;
        }
      })()
    )
  ).toBeFalsy();
  expect(isPlainObject(null)).toBeFalsy();
  expect(isPlainObject(undefined)).toBeFalsy();
  expect(isPlainObject('')).toBeFalsy();
  expect(isPlainObject(1)).toBeFalsy();
});

test('isPrimitive', () => {
  expect(isPrimitive({})).toBeFalsy();
  expect(isPrimitive(new Object())).toBeFalsy();
  expect(isPrimitive(new Number(4))).toBeFalsy();
  expect(isPrimitive(new Date())).toBeFalsy();
  expect(isPrimitive(null)).toBeTruthy();
  expect(isPrimitive(undefined)).toBeTruthy();
  expect(isPrimitive('')).toBeTruthy();
  expect(isPrimitive(1)).toBeTruthy();
  expect(isPrimitive(false)).toBeTruthy();
  expect(isPrimitive([])).toBeFalsy();
});
