const express = require('express');
const app = express();
const cache = require('memory-cache');
const request = require('request');

let apiEndpoint = 'https://pokeapi.co/api/v2/pokemon?limit=151'

app.get('/api/pokemon', (req, res) => {
    if (cache.get('pokemonData') === null) {
      request(apiEndpoint, (error, response, body) => {
        cache.put('pokemonData', body);
        res.send(body);
      })
    }
    else {
      res.send(cache.get('pokemonData'));
    }
})


const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))