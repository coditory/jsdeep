import { deepExists } from './index';

describe('deepExists:', () => {
  test('should confirm existsence of embedded property', () => {
    // given
    const obj = { x: { y: { z: 123 } } };
    // then
    expect(deepExists(obj, 'x.y.z')).toBe(true);
  });

  test('should confirm existsence o embedded property - query with array', () => {
    // given
    const obj = { x: { y: { z: 123 } } };
    // then
    expect(deepExists(obj, ['x', 'y', 'z'])).toBe(true);
  });

  test('should confirm an array item', () => {
    // given
    const obj = { x: ['a', 'b'] };
    // then
    expect(deepExists(obj, 'x.1')).toBe(true);
  });

  test('should decline an array item', () => {
    // given
    const obj = { x: ['a', 'b'] };
    // then
    expect(deepExists(obj, 'x.3')).toBe(false);
  });

  test('should decline existence of a property', () => {
    // given
    const obj = { };
    // then
    expect(deepExists(obj, 'x.y.z')).toBe(false);
  });

  test('should check property existance not value', () => {
    // given
    const obj = { a: false };
    // then
    expect(deepExists(obj, 'a')).toBe(true);
  });
});
