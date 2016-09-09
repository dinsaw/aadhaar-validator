# aadhaar-validator

This library checks whether a given number is valid aadhaar number which is given by Government of India. 
This is not Aadhaar check. This library computes whether a given number confirms criteria specified by UIDAI.


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
//returns true
validator.isValidNumber('123412341235') 
//returns false
```
