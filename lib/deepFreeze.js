const { isSimpleObject } = require('./util');

const shouldBeFrozen = (obj) =>
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

const deepFreeze = (obj) => {
  if (!shouldBeFrozen(obj)) return obj;
  return Array.isArray(obj)
    ? freezeArray(obj, deepFreeze)
    : freezeObject(obj, deepFreeze);
};

module.exports = deepFreeze;
