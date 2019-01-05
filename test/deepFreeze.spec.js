import { deepFreeze } from './index';

const expectFrozen = obj =>
  expect(Object.isFrozen(obj)).toBe(true);

const expectNotFrozen = obj =>
  expect(Object.isFrozen(obj)).toBe(false);

describe('deepFreeze:', () => {
  test('should freeze an object', () => {
    // when
    const frozen = deepFreeze({ a: 'a' });
    // then
    expectFrozen(frozen);
  });

  test('should throw exepction on assignment', () => {
    // when
    const frozen = deepFreeze({ a: 'a' });
    // then
    expect(() => { frozen.a = 'b'; })
      .toThrow(/Cannot assign to read only property 'a'/);
  });

  test('should create a copy of the argument', () => {
    // given
    const passedObj = { a: 'a' };
    // when
    const frozen = deepFreeze(passedObj);
    // then
    expect(frozen).not.toBe(passedObj);
  });

  test('should deeply freeze an object', () => {
    // when
    const frozen = deepFreeze({ a: { x: 'x' } });
    // then
    expectFrozen(frozen.a);
  });

  test('should freeze an array', () => {
    // when
    const frozen = deepFreeze(['a']);
    // then
    expectFrozen(frozen);
  });

  test('should deeply freeze an array', () => {
    // when
    const frozen = deepFreeze([{ a: 'a' }]);
    // then
    expectFrozen(frozen[0]);
  });

  test('should deeply freeze a complex object', () => {
    // when
    const frozen = deepFreeze({
      a: [{
        b: [
          { c: {} }
        ]
      }]
    });
    // then
    expectFrozen(frozen.a[0].b[0].c);
  });

  test('should not freeze instance of a class', () => {
    // given
    class SomeClass {}
    const instance = new SomeClass();
    // when
    const frozen = deepFreeze(instance);
    // then
    expectNotFrozen(frozen);
    expect(frozen).toBe(instance);
  });

  test('should not freeze freeze a date', () => {
    // given
    const date = new Date();
    // when
    const frozen = deepFreeze(date);
    // then
    expectNotFrozen(frozen);
    expect(frozen).toBe(date);
  });
});
