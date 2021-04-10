import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import './PokemonList.css';

//The list of cards to be generated
const PokemonList = () => {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get('/api/pokemon')
    .then(res => {
      setPokemon(res.data.results);
    })
  }, []);

  return (
    <div className='list'>
      {pokemon.map(p => ( //For each pokemon, make a card with that pokemon's info
        <PokemonCard key={p.name} pokemon={p}/> 
      ))}
    </div>
  )
}

export default PokemonList;