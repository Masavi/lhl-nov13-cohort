/*
  PROBLEM:
  Write a Node.js program that takes in an unlimited number of commandLine arguments,
  goes through each commandline argument and prints out the sum of them.

  If any argument is NOT a whole number, skip it.
  Do not support negative numbers.
  If any argument is not a number, output an error message.
  We need at least two arguments for the program to work.
*/

// How do we solve any problem? -> DIVIDE AND CONQUER

// 1. what is a command line argument?
// 2. how do I take in an unlimited number of command line arguments?
var commandLineArguments = process.argv;

// We need at least two arguments for the program to work.
if (commandLineArguments.length < 4) {
  throw new Error('You need to provide at least two extra arguments to add up 🤕');
}

// console.log(commandLineArguments);

// 3. how do I go through each command line argument? what happens if I have to go througn an infinite number of command line arguments?

// index=0 -> where you start
// index < array.length -> as long as this happens, I'll keep looping
// index++ -> what happens after a loop

var sum = 0;

for (let index = 2; index < commandLineArguments.length; index++) {
  const element = commandLineArguments[index];
  sum = sum + parseInt(element);
}

// 5. how can I sum all of them and print the sum?
console.log('Result of the sum: ', sum);