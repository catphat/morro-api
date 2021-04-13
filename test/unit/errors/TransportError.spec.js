const { expect } = require('chai');

const TransportError = require('../../../src/errors/TransportError');

describe('errors/TransportError', () => {
  const errors = { orderGuid: [undefined, 'isRequired'] };
  const error = new TransportError(errors);

  it('has a message', () => {
    expect(error).to.have.property('message', 'Transport errors were found');
  });

  it('has the errors', () => {
    expect(error.errors).to.deep.equal(errors);
  });
});
