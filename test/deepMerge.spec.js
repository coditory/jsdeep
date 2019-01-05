import { deepMerge } from './index';

describe('deepMerge:', () => {
  test('should create new parent objects and copy siblings', () => {
    // given
    const obj = { a: {}, b: {} };
    // when
    const copy = deepMerge(obj, { b: { c: true } });
    // then
    expect(copy).toEqual({ a: {}, b: { c: true } });
    expect(copy.a).toBe(obj.a);
    expect(copy).not.toBe(obj);
    expect(copy.b).not.toBe(obj.b);
  });

  test('should bot change arguments', () => {
    // given
    const a = { x: true };
    const b = { x: false };
    // when
    deepMerge(a, b);
    // then
    expect(a).toEqual({ x: true });
    expect(b).toEqual({ x: false });
  });

  test('should merge multiple objects', () => {
    // when
    const copy = deepMerge({ a: true }, { b: true }, { c: true });
    // then
    expect(copy).toEqual({ a: true, b: true, c: true });
  });

  test('should not merge arrays', () => {
    // when
    const copy = deepMerge({ a: ['x', 'y'] }, { a: ['z'] });
    // then
    expect(copy).toEqual({ a: ['z'] });
  });

  test('should not merge dates', () => {
    // when
    const copy = deepMerge({ a: new Date() }, { a: { b: true } });
    // then
    expect(copy).toEqual({ a: { b: true } });
  });

  test('should merge objects deeply', () => {
    // when
    const copy = deepMerge({ a: { b: { c: true } } }, { a: { b: { d: true } } });
    // then
    expect(copy).toEqual({ a: { b: { c: true, d: true } } });
  });

  test('should copy property from the first object if property is undefined in the second one', () => {
    // when
    const copy = deepMerge({ a: true }, { a: undefined });
    // then
    expect(copy).toEqual({ a: true });
  });

  test('should copy property from the first object if property is null in the second one', () => {
    // when
    const copy = deepMerge({ a: true }, { a: null });
    // then
    expect(copy).toEqual({ a: true });
  });

  test('should not copy property from the first object if property is false in the second one', () => {
    // when
    const copy = deepMerge({ a: true }, { a: false });
    // then
    expect(copy).toEqual({ a: false });
  });
});
