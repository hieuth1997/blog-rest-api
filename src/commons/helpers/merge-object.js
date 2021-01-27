/**
 *
 * @description validate properties of ...source and merge them to target object
 * @param {Object} target object
 * @param {Object} source object
 * @return {Object} merged object
 */
const mergeObject = (target, ...source) => {
  Object.assign(target, ...source);
  for (const interator in target) {
    if (
      typeof target[interator] !== 'boolean' &&
      typeof target[iterator] !== 'number' &&
      !target[iterator]
    )
      delete target[interator];
  }
  return target;
};
