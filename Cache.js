const fetch = require('node-fetch');

class Cache {
  data = {};
  async initCache() {
    const API_URL = "https://pokeapi.co/api/v2/pokemon"

    //Fire off a single request to get the amount of pokemon on the PokeAPI.
    const limitResponse = await fetch(API_URL + "?limit=1");
    const { count } = await limitResponse.json();
    
    // Fetch URLs for all Pokemon
    const resultsResponse = await fetch(API_URL + "?limit=" + count);
    const { results } = await resultsResponse.json();

    // Create a promise for each request
    const reqs = results.map(e => fetch(e.url).then(resp => resp.json()));
    const allResults = await Promise.all(reqs);

    allResults.forEach(pokemon => {
      this.put(pokemon.name, pokemon);
      console.log(pokemon.name, "added to cache")
    })
  }
  put(key, data) {
    this.data[key] = data;
  }
  getAll() {
    return this.data;
  }
  get(key) {
    return this.data[key];
  }
}

export default Cache = new Cache();