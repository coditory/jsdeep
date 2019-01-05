const comparableTypes = ['boolean', 'string', 'number', 'symbol', 'function', 'undefined'];

const compareKeys = (keysA, keysB) => (
  keysA.length === keysB.length &&
    keysA.filter(item => keysB.includes(item)).length === keysA.length
);

const recursiveEqual = (obj, other) => {
  const typeObj = typeof obj;
  const typeOther = typeof other;
  if (typeObj !== typeOther) return false;
  if (obj === null) return other === null;
  if (obj instanceof Date) return ((other instanceof Date) && obj.getTime() === other.getTime());
  if (comparableTypes.includes(typeObj)) return obj === other;
  if (Array.isArray(obj) && !Array.isArray(other)) return false;
  if (Array.isArray(other) && !Array.isArray(obj)) return false;
  const objKeys = Object.keys(obj);
  const otherKeys = Object.keys(other);
  return compareKeys(objKeys, otherKeys)
    && objKeys.every(key => recursiveEqual(obj[key], other[key]));
};

const deepEqual = (first, ...others) =>
  others.every(other => recursiveEqual(first, other));

export default deepEqual;
