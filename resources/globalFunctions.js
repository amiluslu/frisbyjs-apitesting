"use strict";
const frisby = require('frisby');
const joi = frisby.Joi;

global.validateHttpStatusOfResponse = function validateHttpStatusOfResponse(spec) {
    //validation of HTTP status
    return spec.expect('status',200)
}
  
global.validateHeaderContentType = function validateHeaderContentType(spec) {
    //validation of HTTP Header contains application/json commented code validates exact matching
    //return spec.expect('header','Content-Type','application/json;charset=utf-8')
    return spec.expect('header','Content-Type',/json/)
}
  
global.validateResponseType = function validateResponseType(spec){
    //validation of response is array or not 
    return spec.expect('jsonTypes','',joi.array())
}