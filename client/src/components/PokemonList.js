import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import './PokemonList.css';

//The list of cards to be generated
const PokemonList = ({generation}) => {

  const [pokemon, setPokemon] = useState([]); //List of pokemon to display 

  let endPoint = '/api/pokemon/generation/' + generation;

  useEffect(() => { 
    axios.get(endPoint)
    .then(res => {
      setPokemon(Object.values(res.data));
    })
    .catch(err => {
      console.log(err);
    });
  }, [generation, endPoint]);

  return (
    <div>
      <div className='list'>
        {pokemon.map(p => ( //For each pokemon, make a card with that pokemon's info
          <PokemonCard key={p.name} pokemon={p}/> 
        ))}
      </div>
    </div>
  )
}

export default PokemonList;