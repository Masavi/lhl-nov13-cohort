// const logFood = (element)

/**
 * Let's write a function that allows me to perform different actions
 * on a given array.
 * 
 * 1) Log each item of an array
 */

const mexicanFood = ['tacos', 'enchiladas', 'pozole', 'chilaquiles', 'elotes'];

// Now we have a function that receives an array AND ALSO EXPECTS TO RECEIVE A FUNCTION
/**
 * A function that expects to receive a function as an argument
 * is called HIGHER ORDER FUNCTIONS 
 */
const handleArray = (array, action) => {
  console.log('Handling the array...');
  action(array);
}

const myFirstCallback = (array) => {
  const numberOfItems = array.length;
  console.log('The array contains ' + numberOfItems + ' items.');
}

/**
 * When a function is passed as an argument into
 * another function, that is called CALLBACK
 */
// handleArray(mexicanFood, console.log);
// handleArray(mexicanFood, myFirstCallback);


/**
 * CALLBACKS are what you pass into HIGHER ORDER FUNCTIONS
 * HIGHER ORDER FUNCTIONS expect CALLBACKS as an argument
 */

/******************** REAL LIFE EXAMPLE *******************/
// console.log('\n Real life example: \n');

const mexicanFoodArray = ['tacos', 'enchiladas', 'pozole', 'chilaquiles', 'elotes'];

mexicanFoodArray.forEach((dish) => { console.log(dish) })


/** Let's implement our own foreach method */

// 0) The higher order function should expect an array
// 1) I need a higher order function that expects a callback
// 2) The higher order function is going to pass into the callback each item independently
// 3) The callback can decide what to do with each independent item


// Higher order function
const myForEach = (array, callback) => {
  for(var i=0; i<array.length; i++) {
    callback(array[i])
  }
}

// myForEach(mexicanFoodArray, console.log)
myForEach(mexicanFoodArray, (item) => { console.log('The dish name is: ' + item) });