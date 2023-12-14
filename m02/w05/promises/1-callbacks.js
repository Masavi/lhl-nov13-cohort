// Synchronous
const addTwoNumbers = (number1, number2, callback) => {
  const result = number1 + number2;
  return callback(result);
}

const resultArray = addTwoNumbers(15, 15, (one) => {
  console.log('This is the result of the sum:', one);
  const array = [one];
  return array;
})

console.log('This is the result of the callback inside the HoF: ', resultArray);


// Asynchronous

const callback = () => { console.log('Timer has expired! ⏰') }

setTimeout(callback, 2000);