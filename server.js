const express = require('express');
const app = express();
const cache = require('./Cache');

//Get all pokemon and cache them
cache.initCache();

//There should be eight caches, one for each generation

app.get('/api/pokemon/generation/1', (req, res) => {
  res.send(cache.getGen1());
})

app.get('/api/pokemon/generation/2', (req, res) => {
  res.send(cache.getGen2());
})

app.get('/api/pokemon/generation/3', (req, res) => {
  res.send(cache.getGen3());
})

app.get('/api/pokemon/generation/4', (req, res) => {
  res.send(cache.getGen4());
})

app.get('/api/pokemon/generation/5', (req, res) => {
  res.send(cache.getGen5());
})

app.get('/api/pokemon/generation/6', (req, res) => {
  res.send(cache.getGen6());
})

app.get('/api/pokemon/generation/7', (req, res) => {
  res.send(cache.getGen7());
})

app.get('/api/pokemon/generation/8', (req, res) => {
  res.send(cache.getGen8());
})

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))