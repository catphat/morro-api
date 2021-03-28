/**
 * @param {any[]} allowed
 * @return {function(*=): (null|string|string)} Returns null if value is empty or an array.
 *         If else return error message. Use isRequired to enforce requirement.
 */

const isArrayOf = (allowed = []) => (value) => {
  if (!value
    || (Array.isArray(value)
      && (allowed.length === 0
        || (allowed.length !== 0 && value.every((val) => allowed.includes(val)))))) {
    return null;
  }
  if (allowed.length === 0) {
    return 'Expected an array';
  }
  return `Expected an array containing ${allowed.join(',')}`;
};

module.exports = isArrayOf;
