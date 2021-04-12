const frisby = require('frisby');
const joi = frisby.Joi;
const config = require('../resources/config');
require('../resources/globalFunctions');

var alpha3CodeFromBorder;
var capital;

describe('Test 3',function () {
    
    /*
    * Test 3 performs independently from each other. First one (Get Second Border Of Turkey) tests second border of Turkey is Azerbaijan. 
    * Country code of Azerbaijan is AZE. If response is equal to AZE it will pass. Else it will fail.
    * Second one (Get Capital of Country Which is a Second Border of Turkey) tests capital of given country code.
    * If the capital is equal to Baku, it will pass. Else it will fail.
    * Second one works even if the the first one fails. Or vice versa. 
    */

    it('Get Second Border Of Turkey', function () {
        return frisby.get(config.baseURL + "/name/turkey")
        .use(global.validateHttpStatusOfResponse)
        .then(function (res){
            alpha3CodeFromBorder = res.json[0].borders[1];
            expect(alpha3CodeFromBorder).toEqual('AZE')
        })
    });

    it('Get Capital of Country Which is a Second Border of Turkey', function () {
        return frisby.get(config.baseURL + "/alpha/"+alpha3CodeFromBorder)
        .use(global.validateHttpStatusOfResponse)
        .then(function (res2){
            capital = res2.body.capital
            expect(capital).toEqual('Baku')
        });
    });
})





   