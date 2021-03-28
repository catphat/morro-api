/**
 * @param {number} max - max string length
 * @return {function(*=): (null|string|string)} - Returns null if value is a string.
 *          Return error if no string provided or if string exceeds provided max length.
 */
const isString = (max) => (value) => {
  if (!value
    || (typeof value === 'string' && (!max || (max && !(value.length > max))))) {
    return null;
  }
  if (max) {
    return `Expected a string no longer than ${max} characters`;
  }
  return 'Expected a string';
};

module.exports = isString;
