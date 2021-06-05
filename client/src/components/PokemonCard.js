import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './PokemonCard.css';
import DetailsModal from './DetailsModal';
import Modal from 'react-modal';

//Different type colors for different types of pokemon to determine their background color
const typeColors = {
  'Bug': '#A8B820',
  'Dark': '#705848',
  'Dragon': '#7038F8',
  'Electric': '#F8D030',
  'Fairy': '#EE99AC',
  'Fighting': '#C03028',
  'Fire':'#F08030',
  'Flying': '#A890F0',
  'Ghost': '#705898',
  'Grass': '#78C850',
  'Ground': '#E0C068',
  'Ice': '#98D8D8',
  'Normal': '#A8A878',
  'Poison': '#A040A0',
  'Psychic': '#F85888',
  'Rock': '#B8A038',
  'Steel': '#B8B8D0',
  'Water': '#6890F0'
}

const PokemonCard = ({pokemon}) => {

  const [pokemonData, setPokemonData] = useState();
  const [picture, setPicture] = useState();
  const [name, setName] = useState('');
  const [type, setType] = useState(['']);
  const [id, setID] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const pokemonDataEndPoint = '/api/pokemon/individualData';

  useEffect(() => {
    axios.get(pokemonDataEndPoint, {params: {name: pokemon.name} })
      .then(res => {
        //Set data of each pokemon
        setPokemonData(res.data);
        if (typeof res.data.sprites.other['official-artwork'].front_default !== undefined) {
          setPicture(res.data.sprites.other['official-artwork'].front_default);
        }
        setName(capitalize(res.data.name));
        setType(res.data.types.map(t => capitalize(t.type.name)));
        setID('#' + res.data.id);
        //Set the background color of each pokemon
        const type = res.data.types[0].type.name;
        const bgColor = typeColors[capitalize(type)];
        setBackgroundColor(bgColor);
      })
    }, [pokemon])

  const capitalize = (string) => { 
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className='card' style={{backgroundColor}}>
      <div onClick={() => setModalOpen(true)}>
        <span><img className='picture' src={picture} alt={name + ' Picture'}></img></span>
        <h3 className='pokemonName'>{name}</h3>
        <div className='types'>
          {type.map(typeString => <p className='type' key={typeString}>{typeString}</p>)}
        </div>
        <div className='id'>{id}</div>
      </div>
      <div className='modal'>
        <Modal isOpen={modalOpen} className='detailModal' appElement={this}>
          <p className='closeButton' onClick={() => setModalOpen(false)}>+</p>
          <DetailsModal pokemonData={pokemonData} backgroundColor={backgroundColor}/>
        </Modal>
      </div>
    </div>
  )
}

export default PokemonCard;