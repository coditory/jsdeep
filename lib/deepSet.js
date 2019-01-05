const shouldBeCopied = obj =>
  obj !== undefined &&
  obj !== null &&
  typeof obj === 'object' &&
  !(obj instanceof Date) &&
  !Array.isArray(obj);

const copyOrNewObject = obj => (
  shouldBeCopied(obj) ?
    Object.assign({}, obj) :
    {}
);

const recursiveSet = (obj, props, value) => {
  if (!props.length) return value;
  const result = copyOrNewObject(obj);
  const prop = props.shift();
  result[prop] = recursiveSet(result[prop], props, value);
  return result;
};

const deepSet = (obj, props, value) => {
  const splitted = Array.isArray(props) ? props.slice() : props.split('.');
  return recursiveSet(obj, splitted, value);
};

export default deepSet;
