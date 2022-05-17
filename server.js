const express = require('express');
const app = express();
const cache = require('./Cache');

//Get all pokemon and cache them
cache.initCache();

//Endpoint to get a pokemon's individual data
app.get('/api/pokemon/individualData', (req, res) => {
  let pokemonName = req.query.name;
  res.send(cache.getIndividualData(pokemonName));
})

//Endpoints to get each generation
app.get('/api/pokemon/generation/1', (req, res) => {
  res.send(cache.getGen(1));
})

app.get('/api/pokemon/generation/2', (req, res) => {
  res.send(cache.getGen(2));
})

app.get('/api/pokemon/generation/3', (req, res) => {
  res.send(cache.getGen(3));
})

app.get('/api/pokemon/generation/4', (req, res) => {
  res.send(cache.getGen(4));
})

app.get('/api/pokemon/generation/5', (req, res) => {
  res.send(cache.getGen(5));
})

app.get('/api/pokemon/generation/6', (req, res) => {
  res.send(cache.getGen(6));
})

app.get('/api/pokemon/generation/7', (req, res) => {
  res.send(cache.getGen(7));
})

app.get('/api/pokemon/generation/8', (req, res) => {
  res.send(cache.getGen(8));
})

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))