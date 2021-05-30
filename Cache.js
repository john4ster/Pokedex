const fetch = require('node-fetch');

class Cache {
  data = {}; //Object that will hold each pokemon's name and url
  //Cache all pokemon initially
  async initCache() {
    const API_URL = "https://pokeapi.co/api/v2/pokemon";

    //Fetch all pokemon from the API
    const resultsResponse = await fetch(API_URL + "?limit=898");
    const { results } = await resultsResponse.json();

    //Put each pokemon in the cache
    results.forEach(pokemon => {
      this.put(pokemon.name, pokemon);
      console.log(pokemon.name + " added to cache");
    })
  }

  //Put a pokemon's name and url in the cache
  put(key, pokemonData) {
    this.data[key] = pokemonData;
  }

  getAll() {
    return this.data;
  }

  get(key) {
    return this.data[key];
  }

  //Get pokemon by generation from the cache
  getGen1() {
    return Object.values(this.data).slice(0, 151);
  }

  getGen2() {
    return Object.values(this.data).slice(151, 251);
  }

  getGen3() {
    return Object.values(this.data).slice(251, 386);
  }

  getGen4() {
    return Object.values(this.data).slice(386, 493);
  }

  getGen5() {
    return Object.values(this.data).slice(493, 649);
  }

  getGen6() {
    return Object.values(this.data).slice(649, 721);
  }

  getGen7() {
    return Object.values(this.data).slice(721, 809);
  }

  getGen8() {
    return Object.values(this.data).slice(809, 898);
  }

}

module.exports = new Cache();