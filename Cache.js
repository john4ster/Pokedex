const fetch = require('node-fetch');

// The cache is used to make one request to the api for all the necessary data when the server starts and stores that data. 
// After this, all requests for data are supplied by this cache rather than the api to avoid making too many api requests.

class Cache {
  basicData = {}; //Object that will hold each pokemon's name and url
  individualData = {}; //Object that will hold each pokemon's individual data such as types and stats

  //Cache all pokemon initially
  async initCache() {
    const API_URL = "https://pokeapi.co/api/v2/pokemon";

    //Fetch all pokemon from the API
    const resultsResponse = await fetch(API_URL + "?limit=898");
    const { results } = await resultsResponse.json();

    //Put each pokemon in the cache
    results.forEach(pokemon => {
      this.putBasicData(pokemon.name, pokemon);
    })

    //Put each pokemon's individual data into the cache
    //Fetch each pokemon's url
    const individualPokemonDataResponse = await Promise.all(Object.values(this.basicData).map(pokemon => {
      return fetch(pokemon.url).then(res => res.json())
    }))
    const individualPokemonData = await individualPokemonDataResponse;

    //Add each pokemon's individual data into the individualData cache
    individualPokemonData.forEach(pokemon => {
      this.putIndividualData(pokemon.name, pokemon)
    })

  }

  //Put a pokemon's name and url in the cache
  putBasicData(key, pokemonData) {
    this.basicData[key] = pokemonData;
  }

  //Put a pokemon's individual data in the cache
  putIndividualData(key, individualData) {
    this.individualData[key] = individualData;
  }

  //Get each pokemon's individual data
  getIndividualData(key) {
    return this.individualData[key];
  }

  //Get pokemon by generation from the cache
  getGen(genNum) {
    switch(genNum) {
      case 1: return Object.values(this.basicData).slice(0, 151);
      case 2: return Object.values(this.basicData).slice(151, 251);
      case 3: return Object.values(this.basicData).slice(251, 386);
      case 4: return Object.values(this.basicData).slice(386, 493);
      case 5: return Object.values(this.basicData).slice(493, 649);
      case 6: return Object.values(this.basicData).slice(649, 721);
      case 7: return Object.values(this.basicData).slice(721, 809);
      case 8: return Object.values(this.basicData).slice(809, 898);
    } 
  }

  // getGen1() {
  //   return Object.values(this.basicData).slice(0, 151);
  // }

  // getGen2() {
  //   return Object.values(this.basicData).slice(151, 251);
  // }

  // getGen3() {
  //   return Object.values(this.basicData).slice(251, 386);
  // }

  // getGen4() {
  //   return Object.values(this.basicData).slice(386, 493);
  // }

  // getGen5() {
  //   return Object.values(this.basicData).slice(493, 649);
  // }

  // getGen6() {
  //   return Object.values(this.basicData).slice(649, 721);
  // }

  // getGen7() {
  //   return Object.values(this.basicData).slice(721, 809);
  // }

  // getGen8() {
  //   return Object.values(this.basicData).slice(809, 898);
  // }

}

module.exports = new Cache();
