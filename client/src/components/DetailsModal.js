import React, { useState } from 'react';
import './DetailsModal.css';

//Details modal that displays more info on a pokemon
const DetailsModal = ({pokemonData, backgroundColor}) => {

  const capitalize = (string) => { 
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  //Assign pokemon data variables
  const picture = pokemonData.sprites.other['official-artwork'].front_default;
  const name = capitalize(pokemonData.name);
  const types = pokemonData.types.map(t => capitalize(t.type.name));
  const hp = pokemonData.stats[0].base_stat;
  const attack = pokemonData.stats[1].base_stat;
  const defense = pokemonData.stats[2].base_stat;
  const specialAttack = pokemonData.stats[3].base_stat;
  const specialDefense = pokemonData.stats[4].base_stat;
  const speed = pokemonData.stats[5].base_stat;


  return (
    <div className='modal' style={{backgroundColor}}>
      <div class='basicDetails'>
        <span><img src={picture} alt={pokemonData.name + "picture"}></img></span>
        <h1 className='name'>{name}</h1>
        <div className='types'>
          {types.map(typeString => <p className='type' key={typeString}>{typeString}</p>)}</div>
        </div>
      <div className='statDetails'>
        <h2>Base Stats</h2>
        <p>HP: {hp}</p>
        <p>Attack: {attack}</p>
        <p>Defense: {defense}</p>
        <p>Special Attack: {specialAttack}</p>
        <p>Special Defense: {specialDefense}</p>
        <p>Speed: {speed}</p>
      </div>
    </div>
  )
}

export default DetailsModal;