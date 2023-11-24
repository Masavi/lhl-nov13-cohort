/*
  Functions

  1) saves time!
  2) command that manipulates data
  3) shortcut to execute code, also acts as an object
  4) we can "reuse" many times

  Functions can take an input, and produce an output
  something might go in ->
  something might go out <-

  It's a block of code that we can use any time we need,
  by just defining it once.
*/

/* ANATOMY OF A FUNCTION */

/**
 * 1) "function" keyword
 * 2) arguments or parameters, that can go inside parenthesis "()"
 * 3) name of the function
 * 4) curly braces define the block of code that will be executed
 */


// DEFINITION OF A FUNCTION
function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

// How do I call/execute my function?
var firstNumber = 10;
var secondNumber = 15;

// A lot of times, using variables is a way to make your code easier to understand.

// console.log(addTwoNumbers);
// console.log(addTwoNumbers());
// console.log(addTwoNumbers(firstNumber, secondNumber));
// console.log(addTwoNumbers(firstNumber))
// console.log(addTwoNumbers(5, 10))
// console.log("What happens with three arguments?", addTwoNumbers(5, 10, 15));

/** What is the difference between
 * RETURN vs CONSOLE.LOG()
 */

function greetFriend(friendName) {
  var greetMessage = "Hey there! how you doin', " + friendName;
  // console.log(greetMessage);
  return greetMessage;
}

var greetResult = greetFriend("Patrick");

function canYouDrink(age) {
  if (age < 19 ) {
    console.log(false)
  } else {
    console.log(true)
  }
}

var isLegal = canYouDrink(20);
console.log(isLegal)

function drinkingPermit(value) {
  if (value === false) {
    return "You can't drink!"
  } else if (value === true) {
    return "Have a beer 🍻"
  }
}

console.log(drinkingPermit(isLegal));