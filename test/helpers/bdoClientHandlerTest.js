const { match, stub } = require('sinon');
const proxyquire = require('proxyquire');
const path = require('path');
const fs = require('fs');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinonChai = require('sinon-chai');
const uc = require('./upperCase');
const { validateFields: realValidateFields } = require('../../src/validation/index');

chai.use(sinonChai);
const { expect } = chai;

const skipEmptyTest = (params, validation, useDefaults) => {
  if (params) {
    if (
      validation
      && Object.keys(params).find(
        (param) => validation[param] && validation[param].includes('isRequired'),
      ) !== null
    ) return [true];

    if (!validation) {
      return useDefaults ? [false, {}] : [true];
    }
  }
  return useDefaults ? [false, {}] : [false];
};

const validationMatcher = (validation) => match(
  Object.keys(validation).reduce((acc, elem) => {
    acc[elem] = validation[elem].map((val) => (typeof val === 'function' ? match.func : val));
    return acc;
  }, {}),
);

const doTest = ({
  handler, params, validation, responseFile, expectedFile,
}) => {
  const [skipEmpty, useAsEmpty] = skipEmptyTest(params, validation);

  describe(`api/bdo_client/${handler}`, () => {
    const responseDir = 'test/unit/api/bdo_client/bdo_client_raw_responses';
    const rawResponseFile = path.resolve(`${responseDir}/${responseFile}`);
    const expectedResponseFile = path.resolve(`${responseDir}/${expectedFile}`);

    const expectedRawResponse = fs.readFileSync(rawResponseFile).toString();
    const expectedParsedResponse = fs.readFileSync(expectedResponseFile).toString();

    const expectedRawResponseJSON = JSON.parse(expectedRawResponse);
    const expectedParsedResponseJSON = JSON.parse(expectedParsedResponse);

    const post = stub().resolves(expectedRawResponseJSON);
    const transport = { getRegionalBdoTransport: stub().returns({ post }) };
    const validateFields = stub();

    const proxies = {
      './regionalBdoTransport': transport,
    };
    if (validation) proxies['../../validation'] = { validateFields };

    const handlerMethods = proxyquire(`../../src/api/bdo_client/${handler}`, proxies);
    const method = handlerMethods[`${handler}`];

    const resetHistory = () => {
      transport.getRegionalBdoTransport.resetHistory();
      validateFields.resetHistory();
      post.resetHistory();
    };

    const region = 'NA';
    const apiPath = `${uc(handler)}`;

    let result;

    if (params) {
      context('with supplied params', () => {
        before(async () => {
          result = await method(region)(params);
        });

        after(resetHistory);

        it('called getTransport', () => {
          expect(transport.getRegionalBdoTransport).to.have.been.calledOnce;
        });

        if (validation) {
          it('called validateFields with the complete set of params and the validation rules', () => {
            expect(validateFields).to.have.been.calledOnceWith(
              match(params),
              validationMatcher(validation),
            );
          });
        }

        it('called post with the correct params', () => {
          const payload = validateFields.args[0][0];
          expect(post).to.have.been.calledOnceWith(apiPath, payload);
        });

        it('returned the expected result', () => {
          expect(result).to.deep.equal(expectedParsedResponseJSON);
        });

        it('passes with supplied validation and params', () => {
          const payload = validateFields.args[0][0];
          expect(() => realValidateFields(payload, validation)).to.not.throw();
        });
      });
    }

    if (!skipEmpty) {
      context('without supplied params', () => {
        before(async () => {
          result = await method(region)(useAsEmpty);
        });

        after(resetHistory);

        if (validation) {
          it('called validateFields with the complete set of params and the validation rules', () => {
            expect(validateFields).to.have.been.calledOnceWith(
              match(region),
              validationMatcher(validation),
            );
          });
        }

        it('called post with the correct params', () => {
          const payload = validateFields.args[0][0];
          expect(post).to.have.been.calledOnceWith(path, payload);
        });

        it('returned the expected result', () => {
          expect(result).to.deep.equal(expectedParsedResponseJSON);
        });
      });
    }
  });
};

module.exports = doTest;
