const request = require('request');

request.get('https://pokeapi.co/api/v2/pokemon/ditto', (error, response, body) => {
  console.log('This is the response from the pokeapi:');
  const json = JSON.parse(body);
  console.log(json.height);
});

