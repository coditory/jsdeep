import { isSimpleObject } from './util';

const shouldBeMerged = obj =>
  isSimpleObject(obj);

const copyOrNewObject = obj => (
  shouldBeMerged(obj) ?
    Object.assign({}, obj) :
    {}
);

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
    Object.assign({}, first)
  );

export default deepMerge;
