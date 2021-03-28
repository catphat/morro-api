const identity = (value) => value;

/**
 *
 * @param value
 * @param fn
 * @return {undefined|number|*}
 */
const defined = (value, fn = identity) => {
  if (typeof value === 'number' && Number.isNaN(value)) {
    return NaN;
  }
  if (value === undefined) {
    return undefined;
  }
  return fn(value);
};

module.exports = defined;
