/**
 * @param {number} max - max positive number allowed
 * @return - Returns null if value is a non negative number (value >= 0).
 *          And does not exceed max value if max is provided, otherwise returns error.
 *          Ignores value if it's empty, use isRequired to enforce requirement.
 */
const isNonNegativeNumber = (max) => (value) => {
  if (value === null
    || value === undefined
    || (typeof value === 'number'
      && (Number.isNaN(value) || (value >= 0 && (!max || (max && !(value > max))))))) {
    return null;
  }

  if (max) {
    return `Expected a non-negative number no greater than ${max}`;
  }
  return 'Expected a non-negative number';
};

module.exports = isNonNegativeNumber;
