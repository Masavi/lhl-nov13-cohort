const fs = require('fs');

// const promise = fs.promises.readFile('./messages.txt', { encoding: 'utf-8' })

// promise
//   // Access "resolve"
//   .then(data => console.log('Data contains:', data))
//   // Access "reject"
//   .catch(error => console.log('Error contains:', error))

fs.promises.readFile('./message.txt', { encoding: 'utf-8' })
  .then(data => {
    console.log('Read successful:', data);
    return fs.promises.writeFile('./anotherCopy.txt', data);
  })
  .then(() => fs.promises.readFile('./anotherCopy.txt', { encoding: 'utf-8' }))
  .then(copyText => console.log(copyText))
  .catch(error => console.log('.CATCH SAYS...\n', error))