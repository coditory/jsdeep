const { isSimpleObject } = require('./util');

const shouldBeMerged = obj =>
  isSimpleObject(obj);

const copyOrNewObject = obj =>
  shouldBeMerged(obj)
    ? { ...obj }
    : {};

const recursiveMerge = (obj, other) => {
  if (other === null || other === undefined) return obj;
  if (!shouldBeMerged(other)) return other;
  const source = copyOrNewObject(obj);
  return Object.keys(other).reduce((accumulator, key) => Object.assign(accumulator, {
    [key]: recursiveMerge(source[key], other[key])
  }), source);
};

const deepMerge = (first, ...others) =>
  others.reduce(
    (accumulator, other) => recursiveMerge(accumulator, other),
    { ...first }
  );

module.exports = deepMerge;
