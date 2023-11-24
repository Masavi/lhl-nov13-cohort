/**
 * Be mindful that IT IS NOT THE SAME
 * to call a function
 * vs
 * to pass a function
 */

const sayHello = message => "Here is the message: " + message;

// Calling (executing the code)
sayHello();

// Passing (accessing the function definition, not using it)
sayHello;