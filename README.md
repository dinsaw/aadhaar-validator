# aadhaar-validator

[![Build Status](https://travis-ci.org/dinsaw/aadhaar-validator.svg?branch=master)](https://travis-ci.org/dinsaw/aadhaar-validator)

[![NPM Downloads][downloads-image]][downloads-url]

This library checks whether a given number is valid Aadhaar number or Aadhaar Virtual ID, following the structure which is given by Government of India.

This is not Aadhaar check. This library computes whether a given number confirms criteria specified by UIDAI. The aadhaar number validated by this library, may or may not have been issued to real person as theoritically 8000 Crore (80 Billion) UIDs are possible where as Indian population is little over 100 Crores(1 Billion).


References:
- [https://www.npci.org.in/sites/default/files/circular/Circular_No_9.pdf](https://www.npci.org.in/sites/default/files/circular/Circular_No_9.pdf)
- [Verhoeff Algorithm](https://en.wikipedia.org/wiki/Verhoeff_algorithm)
- [Aadhaar VID Circular](https://uidai.gov.in/images/resource/UIDAI_Circular_11012018.pdf)

Installation
------------------

```bash
npm install aadhaar-validator
```

Use
------------------
```node
var validator = require('aadhaar-validator')
validator.isValidNumber('123412341234')
//returns false
validator.isValidNumber('123412341235')
//returns false
validator.isValidNumber('234123412346')
//returns true

//VID Tests
validator.isValidVID('2345234523436129')
//returns true
validator.isValidVID('2345234523436123')
//returns false
validator.isValidVID('2345234523436')
//returns false
```

Test
-------------------
```bash
npm test
```

[downloads-image]: https://img.shields.io/npm/dm/aadhaar-validator.svg
[downloads-url]: https://www.npmjs.com/package/aadhaar-validator
