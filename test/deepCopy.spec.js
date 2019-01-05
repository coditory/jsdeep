import { deepCopy } from './index';

describe('deepCopy:', () => {
  test('should copy an object', () => {
    const source = { a: { b: true } };
    // when
    const copy = deepCopy(source);
    // then
    expect(copy).toEqual(source);
    expect(copy).not.toBe(source);
    expect(copy.a.b).toEqual(source.a.b);
    expect(copy.a).not.toBe(source.a);
  });

  test('should copy an array', () => {
    const source = { a: [{ b: true }] };
    // when
    const copy = deepCopy(source);
    // then
    expect(copy.a[0].b).toEqual(source.a[0].b);
    expect(copy.a[0]).not.toBe(source.a[0]);
  });

  test('should copy a date by a reference', () => {
    const source = { a: new Date() };
    // when
    const copy = deepCopy(source);
    // then
    expect(copy.a).toBe(source.a);
  });
});
