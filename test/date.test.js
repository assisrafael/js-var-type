import { isDate, isDateISOString, isDateLike } from '../src/date';

test('isDate', () => {
  expect(isDate(new Date())).toBeTruthy();
  expect(isDate('2020-07-06T21:14:58.370Z')).toBeFalsy();
  expect(isDate(undefined)).toBeFalsy();
  expect(isDate({})).toBeFalsy();
  expect(isDate('')).toBeFalsy();
  expect(isDate(1)).toBeFalsy();
});

test('isDateISOString', () => {
  expect(isDateISOString('2020-07-06T21:14:58.370Z')).toBeTruthy();
  expect(isDateISOString(new Date())).toBeFalsy();
  expect(isDateISOString(null)).toBeFalsy();
  expect(isDateISOString(undefined)).toBeFalsy();
  expect(isDateISOString({})).toBeFalsy();
  expect(isDateISOString('')).toBeFalsy();
  expect(isDateISOString(1)).toBeFalsy();
});

test('isDateLike', () => {
  expect(isDateLike(new Date())).toBeTruthy();
  expect(isDateLike('2020-07-06T21:14:58.370Z')).toBeTruthy();
  expect(isDateLike(null)).toBeFalsy();
  expect(isDateLike(undefined)).toBeFalsy();
  expect(isDateLike({})).toBeFalsy();
  expect(isDateLike('')).toBeFalsy();
  expect(isDateLike(1)).toBeFalsy();
});
