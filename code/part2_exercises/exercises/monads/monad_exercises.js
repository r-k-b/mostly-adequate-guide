require('../../support');
const Task = require('data.task');
const _ = require('ramda');

// Exercise 1
// ==========
// Use safeProp and map/join or chain to safely get the street name when given a user

const safeProp = _.curry((x, o) => Maybe.of(o[x]));
const user = {
  id:      2,
  name:    "albert",
  address: {
    street: {
      number: 22,
      name:   'Walnut St'
    }
  }
};

const ex1 = undefined;


// Exercise 2
// ==========
// Use getFile to get the filename, remove the directory so it's just the file, then purely log it.

const getFile = () => new IO(() => __filename);

const pureLog = x => new IO(() => {
  console.log(x);
  return 'logged ' + x; // for testing w/o mocks
});

const ex2 = undefined;


// Exercise 3
// ==========
// Use getPost() then pass the post's id to getComments().

const getPost = i =>
  new Task((rej, res) => {
    setTimeout(() => {
      res({id: i, title: 'Love them tasks'}); // THE POST
    }, 300);
  });

const getComments = i =>
  new Task((rej, res) => {
    setTimeout(function () {
      res([
        {post_id: i, body: "This book should be illegal"},
        {post_id: i, body: "Monads are like smelly shallots"}
      ]);
    }, 300);
  });

const ex3 = undefined;


// Exercise 4
// ==========
// Use validateEmail, addToMailingList and emailBlast to implement ex4's type signature.
// It should safely add a new subscriber to the list, then email everyone with this happy news.

//  addToMailingList :: Email -> IO [Email]
const addToMailingList = (list => email => new IO(() => {
  list.push(email);
  return list;
}))([]);

//  emailBlast :: [Email] -> IO String
function emailBlast(list) {
  return new IO(() => 'emailed: ' + list.join(',') // for testing w/o mocks
  );
}

//  validateEmail :: Email -> Either String Email
const validateEmail = x =>
  x.match(/\S+@\S+\.\S+/) ? (new Right(x)) : (new Left('invalid email'));

//  ex4 :: Email -> Either String (IO String)
const ex4 = undefined;


module.exports = {ex1, ex2, ex3, ex4, user};
