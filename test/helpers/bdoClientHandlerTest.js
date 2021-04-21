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

const validationMatcher = (validation) => match(
  Object.keys(validation).reduce((acc, elem) => {
    acc[elem] = validation[elem].map((val) => (typeof val === 'function' ? match.func : val));
    return acc;
  }, {}),
);

const doTest = ({
  handler, params, paramsRequired, paramsExpected, validation, responseFile, expectedFile,
}) => {

  describe(`api/bdo_client/${handler}`, () => {
    const responseDir = 'test/unit/api/bdo_client/bdo_client_raw_responses';

    context('with expected responses', () => {
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

      context('with only required params', () => {
        before(async () => {
          result = await method(region)(paramsRequired);
        });

        after(resetHistory);

        it('called post with the correct params', () => {
          const payload = validateFields.args[0][0];
          expect(paramsExpected).to.deep.equal(payload);
        });

        it('returned the expected result', () => {
          expect(result).to.deep.equal(expectedParsedResponseJSON);
        });
      });

    });

    context('with unexpected responses', () => {
      context('handles invalid-response.txt', () => {
        const invalidResponseFile = path.resolve(`${responseDir}/invalid-response.txt`);
        const invalidResponse = fs.readFileSync(invalidResponseFile).toString();

        const expectedHandledInvalidResponseFile = path.resolve(`${responseDir}/expected-handled-invalid_response_txt.json`);
        const expectedHandledInvalidResponseFileString = fs.readFileSync(expectedHandledInvalidResponseFile).toString();
        const expectedHandledInvalidResponse = JSON.parse(expectedHandledInvalidResponseFileString);

        const post = stub().resolves(invalidResponse);
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

        after(resetHistory);

        it('returned the expected result', async () => {
          const result = await method(region)(params);
          expect(result).to.deep.equal(expectedHandledInvalidResponse);
        });

      });

    });
  });

};

module.exports = doTest;
