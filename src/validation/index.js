const ValidationError = require('../errors/ValidationError');
const isPositiveNumber = require('./isPositiveNumber')();
const isNonNegativeNumber = require('./isNonNegativeNumber')();
const isRequired = require('./isRequired');
const isString = require('./isString')();

const VALIDATIONS = {
  isPositiveNumber,
  isNonNegativeNumber,
  isRequired,
  isString,
};

const validateFields = (payload, rules) => {
  const errors = Object.keys(rules).reduce((acc, elem) => {
    const validations = rules[elem];
    validations.forEach((rule) => {
      const validator = typeof rule === 'string' ? VALIDATIONS[rule] : rule;
      const value = payload[elem];
      const result = validator(value);
      if (result) {
        acc[elem] = acc[elem] || [];
        acc[elem].push([value, result]);
      }
    });
    return acc;
  }, {});

  if (Object.keys(errors).length !== 0) throw new ValidationError(errors);
};

module.exports = { validateFields };
