"use strict";
const frisby = require('frisby');
const joi = frisby.Joi;
const config = require('../resources/config');
require('../resources/globalFunctions');

function validateTurkeyInfoInResponse(spec) { 
  return spec.expect('json', '*.?', { 
    name: "Turkey",
    alpha2Code: "TR",
    alpha3Code: "TUR"
  })
}

function validateResponseArrayLength(spec){
  //validation of response array length is equal to 250 or not 
  return spec.expect('jsonTypes','',joi.array().length(250))
}

function validateResponseOrderedByName(spec){
  //validate that items are ordered by name
  return spec.expect('jsonTypes','[]',joi.array().items().ordered('name'))
}

it('Test 1', function (done) {
  /*
   * Test 1 performs the required validations on the service provided. 
  */
  return frisby.get(config.baseURL)
  .use(global.validateHttpStatusOfResponse)
  .use(global.validateHeaderContentType)
  .use(global.validateResponseType)
  .use(validateResponseArrayLength)
  .use(validateTurkeyInfoInResponse)
  .use(validateResponseOrderedByName)
  .done(done)
 });
 
