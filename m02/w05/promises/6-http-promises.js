const requestPromise = require('request-promise');

requestPromise.get('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(body => console.log(JSON.parse(body)))
  .catch(error => console.log(error))