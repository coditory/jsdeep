const exists = obj =>
  obj !== null && obj !== undefined;

module.exports.exists = exists;

const isSimpleObject = obj =>
  exists(obj)
    && exists(obj.constructor)
    && obj.constructor.name === 'Object';

module.exports.isSimpleObject = isSimpleObject;
