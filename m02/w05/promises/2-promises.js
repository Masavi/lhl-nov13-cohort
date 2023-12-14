
// setTimeout(() => {
//   const randomNumber = Math.random();
//   console.log('Random number is:', randomNumber);
//   if (randomNumber > 0.5) {
//     console.log('Number is bigger than five');
//   } else if (randomNumber <= 0.5) {
//     console.log('Number is equals or less than five');
//   }
// }, 2500);

/**
 * Promises
 */

const promise = new Promise((resolve, reject) => {

  setTimeout(() => {
    const randomNumber = Math.random();
    console.log('Random number is:', randomNumber);
    if (randomNumber > 0.5) {
      resolve('Number is bigger than five');
    } else if (randomNumber <= 0.5) {
      reject('Number is equals or less than five');
    }
  }, 2500);

})

promise
  .then((resolve) => { console.log('This is what resolve passed as an argument:', resolve); })
  .catch((reject) => { console.log('This is what reject passed as an argument:', reject); })

