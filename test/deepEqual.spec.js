import { deepEqual } from './index';

const someSymbol = Symbol('abc');

describe('deepEqual:', () => {
  const shouldReturnTrueFor = (title, ...args) => {
    test(`should return true for equal ${title}`, () => {
      expect(deepEqual(...args)).toBe(true);
    });
  };

  const shouldReturnFalseFor = (title, ...args) => {
    test(`should return false for unequal ${title}`, () => {
      expect(deepEqual(...args)).toBe(false);
    });
  };

  shouldReturnTrueFor('objects', { x: 123 }, { x: 123 });
  shouldReturnTrueFor('nested objects', { x: { y: { z: 123 } } }, { x: { y: { z: 123 } } });
  shouldReturnTrueFor('arrays', ['a', 'b'], ['a', 'b']);
  shouldReturnTrueFor('nested arrays', [[['a', 'b']]], [[['a', 'b']]]);
  shouldReturnTrueFor('nested objects with arrays', { x: { y: { z: [[['a', 'b']]] } } }, { x: { y: { z: [[['a', 'b']]] } } });
  shouldReturnTrueFor('dates', new Date(123), new Date(123));
  shouldReturnTrueFor('numbers', 123, 123);
  shouldReturnTrueFor('strings', 'abc', 'abc');
  shouldReturnTrueFor('booleans', true, true);
  shouldReturnTrueFor('symbols', someSymbol, someSymbol);
  shouldReturnTrueFor('nulls', null, null);
  shouldReturnTrueFor('undefineds', undefined, undefined);
  shouldReturnTrueFor('3 objects', { x: 123 }, { x: 123 }, { x: 123 });

  shouldReturnFalseFor('objects', { x: 123 }, { x: 1234 });
  shouldReturnFalseFor('nested objects', { x: { y: { z: 123 } } }, { x: { y: { z: 1234 } } });
  shouldReturnFalseFor('arrays', ['a', 'b'], ['a', 'b', 'c']);
  shouldReturnFalseFor('nested arrays', [[['a', 'b']]], [[['a', 'b', 'c']]]);
  shouldReturnFalseFor('nested objects with arrays', { x: { y: { z: [[['a', 'b']]] } } }, { x: { y: { z: [[['a', 'b', 'c']]] } } });
  shouldReturnFalseFor('dates', new Date(123), new Date(124));
  shouldReturnFalseFor('numbers', 123, 124);
  shouldReturnFalseFor('strings', 'abc', 'abcd');
  shouldReturnFalseFor('booleans', true, false);
  shouldReturnFalseFor('symbols', someSymbol, Symbol('abc'));
  shouldReturnFalseFor('symbol and string', someSymbol, 'abc');
  shouldReturnFalseFor('date and number', new Date(123), 123);
  shouldReturnFalseFor('object and array', {}, []);
  shouldReturnFalseFor('array and object', [], {});
  shouldReturnFalseFor('3 objects', { x: 123 }, { x: 123 }, { x: 1234 });
});
