import { deepSet } from './index';

describe('deepSet:', () => {
  test('should create new parent objects and copy siblings', () => {
    // given
    const obj = { a: {}, b: {} };
    // when
    const copy = deepSet(obj, 'b.c', true);
    // then
    expect(copy).toEqual({ a: {}, b: { c: true } });
    expect(copy.a).toBe(obj.a);
    expect(copy).not.toBe(obj);
    expect(copy.b).not.toBe(obj.b);
  });

  test('should set prop in an empty obj - array query', () => {
    // when
    const obj = deepSet({}, ['x', 'y', 'z'], 123);
    // then
    expect(obj).toEqual({ x: { y: { z: 123 } } });
  });

  test('should set prop in an empty obj - string query', () => {
    // when
    const obj = deepSet({}, 'x.y.z', 123);
    // then
    expect(obj).toEqual({ x: { y: { z: 123 } } });
  });

  test('should add prop in an existing subobj', () => {
    // given
    const obj = { x: { y: { z: 123 } } };
    // when
    const copy = deepSet(obj, 'x.y.w', 'xyw');
    // then
    expect(copy).toEqual({ x: { y: { z: 123, w: 'xyw' } } });
  });

  test('should modify a prop', () => {
    // given
    const obj = { x: { y: { z: 123 } } };
    // when
    const copy = deepSet(obj, 'x.y.z', 'xyz');
    // then
    expect(copy).toEqual({ x: { y: { z: 'xyz' } } });
  });

  test('should set an object', () => {
    // when
    const obj = deepSet({}, 'x.y', { z: 123 });
    // then
    expect(obj).toEqual({ x: { y: { z: 123 } } });
  });
});
