import React, {useEffect, useState} from 'react';
import './../styles/Component.css';
import {Link} from 'react-router-dom';

interface PokedexResponse {
    results: Pokemon[];
  }
  
  interface Pokemon {
    name: string,
    url: string 
  }
  
  interface PokedexProps {
    limiting?: number
  }
  
  const Pokedex = ({limiting=151} : PokedexProps) => {
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(false);
    const [filterText, setFilterText] = useState("");
    const [limit, setLimit] = useState(10);
  
    const loadPokemon = async(limit: number) => {
      setLoading(true);
      let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit="+limit);
      let pokedex : PokedexResponse = await response.json();
      
      setPokemon(pokedex.results);
      setLoading(false);
    }
    useEffect(() => {
      loadPokemon(limit);
    }, [limit]);
  
    return (  
      <div className='compMain'>
        <div className="mainContainer" style={{paddingTop: 0}}>
        <label style={{color: 'white'}}>Pokemon name:</label>
        <input className='inputPokemon' type="text" onChange={(e) => setFilterText(e.target.value)} value={filterText} />
        <input className='inputPokemon' type="number" onChange={(e) => setLimit(Number(e.target.value))} value={limit} />
        <div className="pokemonContainer">
        <ul>
          {pokemon.filter((p) => p.name.startsWith(filterText)).map((pokemon) => {
              return (
                <div className='pokemonList'>
                <h2 className='singlePokemon'>{pokemon.name}</h2>
                </div>
              )
            })}
        </ul>
        </div>
        </div>
        <Link to={'/components'}><button className='compBtn'>back</button></Link>
      </div>
    )
  }

  export default Pokedex;