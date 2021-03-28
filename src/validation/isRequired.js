const checkRequired = (value) => {
  if (typeof value === 'number') {
    return !Number.isNaN(value);
  }
  if (Array.isArray(value) || typeof value === 'string') {
    return value.length !== 0;
  }
  if (value === undefined || value === null) {
    return false;
  }
  return (typeof value === 'object' && Object.keys(value).length !== 0);
};

const isRequired = (value) => (checkRequired(value) ? null : 'Field is required');

module.exports = isRequired;
