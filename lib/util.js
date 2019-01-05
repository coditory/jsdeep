export const exists = obj =>
  obj !== null &&
  obj !== undefined;

export const isSimpleObject = obj =>
  exists(obj) &&
  exists(obj.constructor) &&
  obj.constructor.name === 'Object';
