import { isNumber, isInRange, isFinite, isInteger, isNatural, isSafeInteger } from '../src/number';

test('isNumber', () => {
  expect(isNumber(1)).toBeTruthy();
  expect(isNumber(Infinity)).toBeTruthy();
  expect(isNumber(null)).toBeFalsy();
  expect(isNumber(undefined)).toBeFalsy();
  expect(isNumber('')).toBeFalsy();
  expect(isNumber('1')).toBeFalsy();
  expect(isNumber({})).toBeFalsy();
  expect(isNumber([])).toBeFalsy();
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

test('isFinite', () => {
  expect(isFinite(1)).toBeTruthy();
  expect(isFinite('1')).toBeFalsy();
  expect(isFinite(Infinity)).toBeFalsy();
});

test('isInteger', () => {
  expect(isInteger(1)).toBeTruthy();
  expect(isInteger('1')).toBeFalsy();
  expect(isInteger(1.123)).toBeFalsy();
  expect(isInteger(Infinity)).toBeFalsy();
});

test('isSafeInteger', () => {
  expect(isSafeInteger(1)).toBeTruthy();
  expect(isSafeInteger(1123123123123123123123)).toBeFalsy();
  expect(isSafeInteger('1')).toBeFalsy();
  expect(isSafeInteger(1.123)).toBeFalsy();
  expect(isSafeInteger(Infinity)).toBeFalsy();
});

test('isNatural', () => {
  expect(isNatural(0)).toBeTruthy();
  expect(isNatural(1)).toBeTruthy();
  expect(isNatural('1')).toBeFalsy();
  expect(isNatural(1.123)).toBeFalsy();
  expect(isNatural(-1.123)).toBeFalsy();
  expect(isNatural(Infinity)).toBeFalsy();
});
