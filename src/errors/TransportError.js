const safeFn = require('../utils/safeFn');

class TransportError extends Error {
  constructor(errors) {
    super('Transport errors were found');
    this.name = this.constructor.name;
    safeFn(Error.captureStackTrace, this, this.constructor);
    this.errors = errors;
  }
}

module.exports = TransportError;
