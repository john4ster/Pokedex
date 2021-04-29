const express = require('express');
const app = express();
const cache = require('memory-cache');
const fetch = require('node-fetch');

//API Endpoints for each generation of pokemon
let gen1EndPoint = 'https://pokeapi.co/api/v2/pokemon?limit=151';
let gen2EndPoint = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=151';
let gen3EndPoint = 'https://pokeapi.co/api/v2/pokemon?limit=135&offset=251';
let gen4EndPoint = 'https://pokeapi.co/api/v2/pokemon?limit=107&offset=386';
let gen5EndPoint = 'https://pokeapi.co/api/v2/pokemon?limit=156&offset=493';
let gen6EndPoint = 'https://pokeapi.co/api/v2/pokemon?limit=72&offset=649';
let gen7EndPoint = 'https://pokeapi.co/api/v2/pokemon?limit=88&offset=721';
let gen8EndPoint = 'https://pokeapi.co/api/v2/pokemon?limit=89&offset=809';

//There should be eight caches, one for each generation
//An additional cache will store individual pokemon data

app.get('/api/pokemon/generation/1', (req, res) => {
    if (cache.get('gen1PokemonData') === null) {
      fetch(gen1EndPoint) //Get the data from the api
        .then(body => body.json()) //Get the json from the api
        .then(json => cache.put('gen5PokemonData', json)) //Cache the data
        .then(json => res.send(json)); //Send the data back to the front end
    }
    else {
        res.send(cache.get('gen1PokemonData')); //Pull the data from the cache and send it to front end
    }
})

app.get('/api/pokemon/generation/2', (req, res) => {
  if (cache.get('gen2PokemonData') === null) {
    fetch(gen2EndPoint) //Get the data from the api
      .then(body => body.json()) //Get the json from the api
      .then(json => cache.put('gen2PokemonData', json)) //Cache the data
      .then(json => res.send(json));
  }
  else {
    res.send(cache.get('gen2PokemonData'));
  }
})

app.get('/api/pokemon/generation/3', (req, res) => {
  if (cache.get('gen3PokemonData') === null) {
    fetch(gen3EndPoint) //Get the data from the api
      .then(body => body.json()) //Get the json from the api
      .then(json => cache.put('gen3PokemonData', json)) //Cache the data
      .then(json => res.send(json));
  }
  else {
    res.send(cache.get('gen3PokemonData'));
  }
})

app.get('/api/pokemon/generation/4', (req, res) => {
  if (cache.get('gen4PokemonData') === null) {
    fetch(gen4EndPoint) //Get the data from the api
      .then(body => body.json()) //Get the json from the api
      .then(json => cache.put('gen4PokemonData', json)) //Cache the data
      .then(json => res.send(json));
  }
  else {
    res.send(cache.get('gen4PokemonData'));
  }
})

app.get('/api/pokemon/generation/5', (req, res) => {
  if (cache.get('gen5PokemonData') === null) {
    fetch(gen5EndPoint) //Get the data from the api
      .then(body => body.json()) //Get the json from the api
      .then(json => cache.put('gen5PokemonData', json)) //Cache the data
      .then(json => res.send(json));
  }
  else {
    res.send(cache.get('gen5PokemonData'));
  }
})

app.get('/api/pokemon/generation/6', (req, res) => {
  if (cache.get('gen6PokemonData') === null) {
    fetch(gen6EndPoint) //Get the data from the api
      .then(body => body.json()) //Get the json from the api
      .then(json => cache.put('genPokemonData', json)) //Cache the data
      .then(json => res.send(json));
  }
  else {
    res.send(cache.get('gen6PokemonData'));
  }
})

app.get('/api/pokemon/generation/7', (req, res) => {
  if (cache.get('gen7PokemonData') === null) {
    fetch(gen7EndPoint) //Get the data from the api
      .then(body => body.json()) //Get the json from the api
      .then(json => cache.put('gen7PokemonData', json)) //Cache the data
      .then(json => res.send(json));
  }
  else {
    res.send(cache.get('gen7PokemonData'));
  }
})

app.get('/api/pokemon/generation/8', (req, res) => {
  if (cache.get('gen8PokemonData') === null) {
    fetch(gen8EndPoint) //Get the data from the api
      .then(body => body.json()) //Get the json from the api
      .then(json => cache.put('gen8PokemonData', json)) //Cache the data
      .then(json => res.send(json));
  }
  else {
    res.send(cache.get('gen8PokemonData'));
  }
})


const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))