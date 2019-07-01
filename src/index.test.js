var expect = require("chai").expect;
var validator = require("./index");

describe('isValidNumber', function() {
  it('should return false when last 1 digit is checksum of first 11 digits, but first digit is 1', function() {
    var result = validator.isValidNumber("123412341234");
    expect(result).to.be.false;
  });

  it('should return false when last 1 digit is checksum of first 11 digits, but first digit is 0', function() {
    var result = validator.isValidNumber("023412341233");
    expect(result).to.be.false;
  });

  it('should return true when last 1 digit is checksum of first 11 digits for non-0,non-1 first digit', function() {
    var result = validator.isValidNumber("234523452343");
    expect(result).to.be.true;
  });

  it('should return false when checksum condition matches but length of number is not 12.', function() {
    var result = validator.isValidNumber("2345234523436");
    expect(result).to.be.false;
  });
});

describe('isValidVID', function() {
  it('should return false when checksum condition matches but length of number is not 16 for a VID.', function() {
    var result = validator.isValidVID("2345234523436");
    expect(result).to.be.false;
  });

  it('should return false when checksum condition does not match but length of VID is 16.', function() {
    var result = validator.isValidVID("2345234523436123");
    expect(result).to.be.false;
  });

  it('should return true when checksum condition matches and length of VID is 16.', function() {
    var result = validator.isValidVID("2345234523436129");
    expect(result).to.be.true;
  });
});