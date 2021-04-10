import React from 'react';
import './App.css';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <div className="App">
      <div className='title'>
        <h1>Pokedex</h1>
      </div>
      <div className='list'>
        <PokemonList />
      </div>
    </div>
  );
}

export default App;
