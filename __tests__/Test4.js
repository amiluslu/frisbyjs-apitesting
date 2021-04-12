const frisby = require('frisby');
const joi = frisby.Joi;
const config = require('../resources/config');
require('../resources/globalFunctions');

var alpha3CodeFromBorder;
var capital;

describe('Alternative Of Test 3',function () {
    /*
    * Test 4 performs dependently from each other.First of all, validate second border of Turkey is AZE. 
    * After that validates capital of AZE is Baku or not. 
    * In that case, If border control is fail, test will interrupt. Namely not checks the capital service. 
    * This is example of Nested tests.
    */
    it('Checks 2nd Border of Turkey and Its capital..', function () {
        return frisby.get(config.baseURL + "/name/turkey")
        .use(global.validateHttpStatusOfResponse)
        .then(function (res){
            alpha3CodeFromBorder = res.json[0].borders[1];
            expect(alpha3CodeFromBorder).toEqual('AZE')
            frisby.get(config.baseURL + "/alpha/"+alpha3CodeFromBorder)
                .use(global.validateHttpStatusOfResponse)
                .then(function (res2){
                    capital = res2.body.capital
                    expect(capital).toEqual('Baku')
                });
        })
    });
})





   