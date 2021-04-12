const frisby = require('frisby');
const joi = frisby.Joi;
const config = require('../resources/config');
require('../resources/globalFunctions');

function validateArrayItemLength(spec){
  //checks item length of response array is equal to 1 or not 
  return spec.expect('jsonTypes','',joi.array().items().length(1))
}
function validateRequiredFields(spec) { 
  //checks required fields in response, it exists or not 
    return spec.expect('jsonTypes', '*', { 
      name: joi.required(),
      population: joi.required(),
      alpha2Code: joi.required(),
      area: joi.required()
    });
}

function validateFieldTypes(spec) { 
  //validation of parameter types 
  return spec.expect('jsonTypes', '*', { 
    name: joi.string(),
    population: joi.number()
  });
}

it('Test 2', function (done) {
  /*
   * Test 2 performs the required validations on the service which provides the information about Turkey. 
  */
  return frisby.get(config.baseURL + "/name/turkey")
  .use(global.validateHttpStatusOfResponse)
  .use(global.validateResponseType)
  .use(validateArrayItemLength)
  .use(validateRequiredFields)
  .use(validateFieldTypes)
  .done(done);
 });
 