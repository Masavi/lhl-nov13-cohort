function multiplyTwoNumbers(n1, n2) {
  return n1 * n2;
}

console.log(multiplyTwoNumbers);
console.log(multiplyTwoNumbers(5, 3));

var myFunction = multiplyTwoNumbers;

console.log('My function definition 🖼:', myFunction);
console.log('My function being called 🖼:', myFunction(10, 20));

