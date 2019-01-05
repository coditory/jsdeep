const recursiveGet = (obj, props) => {
  if (!props.length) return obj;
  const prop = props.shift();
  return obj.hasOwnProperty(prop) ?
    recursiveGet(obj[prop], props) :
    undefined;
};

const deepGet = (obj, props) => {
  const splitted = Array.isArray(props) ? props.slice() : props.split('.');
  return recursiveGet(obj, splitted);
};

export default deepGet;
