#aadhaar-validator

[![Build Status](https://travis-ci.org/dinsaw/aadhaar-validator.svg?branch=master)](https://travis-ci.org/dinsaw/aadhaar-validator)

[![NPM Downloads][downloads-image]][downloads-url]

This library checks whether a given number is valid aadhaar number, following the structure which is given by Government of India.
This is not Aadhaar check. This library computes whether a given number confirms criteria specified by UIDAI. The aadhaar number validated by this library, may or may not have been issued to real person as theoritically 8000 Crore (80 Billion) UIDs are possible where as Indian population is little over 100 Crores(1 Billion).


For more information:
[https://groups.google.com/forum/#!topic/aadhaarauth/eB5hOU-Qtq0](https://groups.google.com/forum/#!topic/aadhaarauth/eB5hOU-Qtq0)

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

```

Test
-------------------
```bash
npm test
```

[downloads-image]: https://img.shields.io/npm/dm/aadhaar-validator.svg
[downloads-url]: https://www.npmjs.com/package/aadhaar-validator
