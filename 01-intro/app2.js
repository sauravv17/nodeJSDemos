const validator = require("validator");
console.log(validator.isEmail("ss@example.com"));
console.log(validator.isEmail("ssexample.com"));

var date = new Date();
console.log(validator.isDate(date));
