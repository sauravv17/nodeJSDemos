const validator = require("validator");
console.log(validator.isEmail("ss@example.com"));
console.log(validator.isEmail("ssexample.com"));

console.log(validator.isDate("15/02/2022"));
