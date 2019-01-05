import { isSimpleObject } from './util';

const shouldBeFrozen = obj =>
  (Array.isArray(obj) || isSimpleObject(obj))
  && !Object.isFrozen(obj);

const freezeArray = (arr, next) =>
  Object.freeze(arr.map(next));

const freezeObject = (obj, next) => {
  const copy = Object.keys(obj)
    .reduce((aggregate, key) => Object.assign(aggregate, {
      [key]: next(obj[key])
    }), {});
  return Object.freeze(copy);
};

export const recursiveFreeze = (obj) => {
  if (!shouldBeFrozen(obj)) return obj;
  return Array.isArray(obj) ?
    freezeArray(obj, recursiveFreeze) :
    freezeObject(obj, recursiveFreeze);
};

const freeze = obj => recursiveFreeze(obj);

export default freeze;
