const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let sum = 0;
	for (const item of array) {
    sum += item;
  }
  return sum;
};

const multiply = function(array) {
  let mul = 1;
	for (const item of array) {
    mul *= item;
  }
  return mul;
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(num) {
	let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
