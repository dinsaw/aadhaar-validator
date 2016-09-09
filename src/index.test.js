var expect = require("chai").expect;
var validator = require("./index");

describe('aadhaar-validator', function() {
    it('should return true when last 1 digit is checksum of first 11 digits.', function() {
        var result = validator.isValidNumber("123412341234");
        expect(result).to.be.true;
    });
    
    it('should return false when checksum condition matches but length of number is not 12.', function() {
        var result = validator.isValidNumber("1234123412347");
        expect(result).to.be.false;
    });
    
});