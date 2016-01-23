require('../../support');
const Task = require('data.task');
const _ = require('ramda');

// fib browser for test
const localStorage = {};



// Exercise 1
// ==========
// Write a function that add's two possibly null numbers together using Maybe and ap()

//  ex1 :: Number -> Number -> Maybe Number
const ex1 = (x, y) => {
  // write me
};


// Exercise 2
// ==========
// Now write a function that takes 2 Maybe's and adds them. Use liftA2 instead of ap().

//  ex2 :: Maybe Number -> Maybe Number -> Maybe Number
const ex2 = undefined;



// Exercise 3
// ==========
// Run both getPost(n) and getComments(n) then render the page with both. (the n arg is arbitrary)
const makeComments = _.reduce((acc, c) => `${ acc }<li>${ c }</li>`, "");
const render = _.curry((p, cs) => `<div>${ p.title }</div>${ makeComments(cs) }`);

//  ex3 :: Task Error HTML
const ex3 = undefined;



// Exercise 4
// ==========
// Write an IO that gets both player1 and player2 from the cache and starts the game
localStorage.player1 = "toby";
localStorage.player2 = "sally";

const getCache = function(x) {
  return new IO(() => localStorage[x]);
};
const game = _.curry((p1, p2) => `${ p1 } vs ${ p2 }`);

//  ex4 :: IO String
const ex4 = undefined;





// TEST HELPERS
// =====================

function getPost(i) {
  return new Task((rej, res) => {
    setTimeout(() => {
      res({ id: i, title: 'Love them futures' });
    }, 300);
  });
}

function getComments(i) {
  return new Task((rej, res) => {
    setTimeout(() => {
      res(["This book should be illegal", "Monads are like space burritos"]);
    }, 300);
  });
}

module.exports = {ex1, ex2, ex3, ex4};