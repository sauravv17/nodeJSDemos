console.log("utils.js");

const name = "andrew";

const add = function (a, b) {
  return a + b;
};

module.exports = add;

module.exports = {
  addmethod: add,
  param1: name,
};
