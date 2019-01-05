import { deepGet } from './index';

describe('deepGet:', () => {
  test('should get a prop - string query', () => {
    // given
    const obj = { x: { y: { z: 123 } } };
    // then
    expect(deepGet(obj, 'x.y.z')).toBe(obj.x.y.z);
  });

  test('should get a prop - array query', () => {
    // given
    const obj = { x: { y: { z: 123 } } };
    // then
    expect(deepGet(obj, ['x', 'y', 'z'])).toBe(obj.x.y.z);
  });

  test('should get the second element from an array', () => {
    // given
    const obj = { x: ['a', 'b', 'c'] };
    expect(deepGet(obj, 'x.2')).toBe(obj.x[2]);
  });

  test('should return undefined on non existing propery', () => {
    // given
    const obj = { };
    // then
    expect(deepGet(obj, 'x.y.z')).toBe(undefined);
  });
});
