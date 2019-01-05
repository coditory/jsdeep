import { isSimpleObject } from './util';

const shouldBeCopied = obj =>
  Array.isArray(obj)
  || isSimpleObject(obj);

const copyArray = (arr, next) => arr.map(next);

const copyObject = (obj, next) =>
  Object.keys(obj)
    .reduce((aggregate, key) => Object.assign(aggregate, {
      [key]: next(obj[key])
    }), {});

const recursiveCopy = (obj) => {
  if (!shouldBeCopied(obj)) return obj;
  return Array.isArray(obj) ?
    copyArray(obj, recursiveCopy) :
    copyObject(obj, recursiveCopy);
};

const deepCopy = obj => recursiveCopy(obj);

export default deepCopy;
