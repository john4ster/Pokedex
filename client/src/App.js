import React, { useState } from 'react';
import './App.css';
import PokemonList from './components/PokemonList';

function App() {

  const [gen, setGen] = useState(1);

  return (
    <div className="App">
      <div className='topBar'>
        <h1 className='title'>Pokedex</h1>
        <h3 className='generationTitle'>Select Generation:</h3>
        <div className='generationButtons'>
          <button onClick={e => setGen(1)}>I</button>
          <button onClick={e => setGen(2)}>II</button>
          <button onClick={e => setGen(3)}>III</button>
          <button onClick={e => setGen(4)}>IV</button>
          <button onClick={e => setGen(5)}>V</button>
          <button onClick={e => setGen(6)}>VI</button>
          <button onClick={e => setGen(7)}>VII</button>
          <button onClick={e => setGen(8)}>VIII</button>
        </div>
      </div>
      <div className='list'>
        <PokemonList generation={gen}/>
      </div>
    </div>
  );
}

export default App;
