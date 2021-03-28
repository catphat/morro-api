const downCase = (string) => string.slice(0, 1).toLowerCase() + string.slice(1);

/**
 * Takes input array/object and makes all keys lowercase.
 * @param {Array|Object} input
 * @return {{}|*}
 */
const fixKeys = (input) => {
  if (input) {
    if (Array.isArray(input)) {
      return input.map(fixKeys);
    }
    if (typeof input === 'object') {
      return Object.keys(input).reduce((acc, elem) => {
        acc[downCase(elem)] = fixKeys(input[elem]);
        return acc;
      }, {});
    }
    return input;
  }
  return input;
};

module.exports = fixKeys;
