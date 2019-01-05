const recursiveExists = (obj, props) => {
  if (props.length === 1) return obj.hasOwnProperty(props[0]);
  const prop = props.shift();
  return obj.hasOwnProperty(prop) ?
    recursiveExists(obj[prop], props) :
    false;
};

const deepExists = (obj, props) => {
  const splitted = Array.isArray(props) ? props.slice() : props.split('.');
  return props.length > 0 && recursiveExists(obj, splitted);
};

export default deepExists;
