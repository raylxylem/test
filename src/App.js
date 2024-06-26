import './App.css';
import React, { useCallback, useEffect, useState } from 'react'
import PokemonProfile from './components/PokemonProfile';
import PokemonList from './components/PokemonList';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemon, setPokemon] = useState();
  const [page, setPage] = useState(1);

  const getPokemonList = useCallback(async ()=>{
    await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${10 * page}&limit=10`).then((res)=>{
      res.json().then((data)=>{
        setPokemonList(data.results)
      })
    })
  }, [page])

  async function getPokemon(pokemonName){
    await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((res)=>{
      res.json().then((data)=>{
        setPokemon(data)
      })
    })
  }

  useEffect(()=>{
    getPokemonList()
  },[getPokemonList])

  return (
    <div>
      <PokemonList pokemonList={pokemonList} page={page} setPage={setPage} getPokemon={getPokemon}/>
      {pokemon && 
        <PokemonProfile pokemon={pokemon}/>
      }
    </div>
  );
}

export default App;
