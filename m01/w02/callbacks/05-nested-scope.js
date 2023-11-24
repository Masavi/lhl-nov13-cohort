// GLOBAL SCOPE
const answerToTheUniverse = 42;

const first = () => {
  // LOCAL SCOPE
  const beer = 'Corona';
  console.log('is hungry value:' , isHungry);

  const second = () => {
    const isHungry = true;

    const third = () => {

      const fourth = () => {
        console.log(answerToTheUniverse, beer, isHungry);
      }
      fourth();
    }
    third();
  }

  second();
}

// first();

// console.log('beer value:', beer);



const myFirstFunction = () => {
  const pets = ['charlie', 'jensen', 'nina'];

  const mySecondFunction = () => {
    console.log(pets);
  }

  mySecondFunction();
}

myFirstFunction();