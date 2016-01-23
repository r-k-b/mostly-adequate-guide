require('../../support');
const _ = require('ramda');


// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function

const words = (str) => split(' ', str);


// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.

const sentences = undefined;


// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions

const filterQs = xs => filter(x => match(/q/i, x), xs);


// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max to not reference any arguments

// LEAVE BE:
const _keepHighest = (x, y) => x >= y ? x : y;

// REFACTOR THIS ONE:
const max = xs => reduce((acc, x) => _keepHighest(acc, x), 0, xs);


// Bonus 1:
// ============
// wrap array's slice to be functional and curried.
// //[1,2,3].slice(0, 2)
const slice = undefined;


// Bonus 2:
// ============
// use slice to define a function "take" that takes n elements. Make it curried
// // Result for "Something" with n=4 should be "Some"
const take = undefined;


module.exports = {
  words, sentences, filterQs, max, slice, take
};
