import { isDate, isDateString, isDateISOString, isDateLike } from '../src/date';

test('isDate', () => {
  expect(isDate(new Date())).toBeTruthy();
  expect(isDate('2020-07-06T21:14:58.370Z')).toBeFalsy();
  expect(isDate(undefined)).toBeFalsy();
  expect(isDate({})).toBeFalsy();
  expect(isDate('')).toBeFalsy();
  expect(isDate(1)).toBeFalsy();
});

test('isDateString', () => {
  expect(isDateString('2020-07-06')).toBeTruthy();
  expect(isDateString('06/06/2020')).toBeFalsy();
  expect(isDateString('2020-07')).toBeFalsy();
  expect(isDateString(new Date())).toBeFalsy();
  expect(isDateString('2020-07-06T21:14:58.370Z')).toBeFalsy();
  expect(isDateString(undefined)).toBeFalsy();
  expect(isDateString({})).toBeFalsy();
  expect(isDateString('')).toBeFalsy();
  expect(isDateString(1)).toBeFalsy();
});

test('isDateISOString', () => {
  expect(isDateISOString('2020-07-06T21:14:58.370Z')).toBeTruthy();
  expect(isDateISOString('2020-07-06T21:14:58.370')).toBeFalsy();
  expect(isDateISOString('2020-07-06')).toBeFalsy();
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
