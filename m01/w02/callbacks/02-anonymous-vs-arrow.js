// 1) Regular vanilla Javascript function
function getSquareArea(side) {
  return side*side;
}

console.log(getSquareArea(5));

// 2) Anonymous functions
const myAnonymousFunction = function (side) {
  return side*side;
}

console.log(myAnonymousFunction(5));

// 3) Arrow functions (fat arrow functions)
const myArrowFunction = (side) => {
  return side*side;
}

console.log(myArrowFunction(5));

// 3.1) Arrow function with less code
const myNewArrowFunction = side => side*side;
