const makeValidationTest = require('../../helpers/makeValidationTest');

const isNonNegativeNumber = require('../../../src/validation/isNonNegativeNumber');

describe('validation/isNonNegativeNumber', () => {
  const makeTest = (max) => makeValidationTest(isNonNegativeNumber(max));

  context('without a maximum', () => {
    const err = 'Expected a non-negative number';
    const doTest = makeTest();
    [
      ['the number 5', 5, null],
      ['the string 5', '5', err],
      ['negative 1', -1, err],
      ['zero', 0, null],
      ['null', null, null],
      ['undefined', undefined, null],
      ['NaN', NaN, null],
    ].forEach(doTest);
  });

  context('when maximum is set to 10', () => {
    const err = 'Expected a non-negative number no greater than 10';
    const doTest = makeTest(10);
    [
      ['the number 5', 5, null],
      ['the number 11', 11, err],
    ].forEach(doTest);
  });
});
