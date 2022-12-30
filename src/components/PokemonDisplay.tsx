import React, {useEffect, useState} from 'react';
import './../styles/Component.css';
import {Link} from 'react-router-dom';

interface Pokemon {
    name: string,
    image: string
}

let Eevee: Pokemon = {
    name: "Eevee",
    image: require("./../images/Eevee.gif")
}

let Jolteon: Pokemon = {
    name: "Jolteon",
    image: require("./../images/Jolteon.gif")
}

let Flareon: Pokemon = {
    name: "Flareon",
    image: require("./../images/Flareon.gif")
}

let Vaporeon: Pokemon = {
    name: "Vaporeon",
    image: require("./../images/Vaporeon.gif")
}

let Umbreon: Pokemon = {
    name: "Umbreon",
    image: require("./../images/Umbreon.gif")
}

let Espeon: Pokemon = {
    name: "Espeon",
    image: require("./../images/Espeon.gif")
}

let Leafeon: Pokemon = {
    name: "Leafeon",
    image: require("./../images/Leafeon.gif")
}

let Glaceon: Pokemon = {
    name: "Glaceon",
    image: require("./../images/Glaceon.gif")
}

const PokemonDisplay = () => {
    let [currentPokemon, setCurrentPokemon] = useState<Pokemon>(Eevee);
    const [evolution, setEvolution] = useState('');

    const setPokemon = (evolution: string) => {
        if (evolution === "Jolteon")
        {
            setCurrentPokemon(Jolteon);
        } else if (evolution === "Flareon")
        {
            setCurrentPokemon(Flareon);
        } else if (evolution === "Vaporeon")
        {
            setCurrentPokemon(Vaporeon);
        } else if (evolution === "Espeon")
        {
            setCurrentPokemon(Espeon);
        } else if (evolution === "Umbreon")
        {
            setCurrentPokemon(Umbreon);
        } else if (evolution === "Leafeon")
        {
            setCurrentPokemon(Leafeon);
        } else if (evolution === "Glaceon")
        {
            setCurrentPokemon(Glaceon);
        }
    }
    
    return (
        <div className='compMain'>
            <div className='mainContainer'>
            <h2 style={{color: 'white'}}>Try to evolve this Eevee</h2>

            <select style={{width: 125, height: 25, textAlign: 'center', border: '2px solid black', borderRadius: 20}} onChange={(event) => setEvolution(event.target.value)}>
                <option value="Jolteon">Thunder Stone</option>
                <option value="Flareon">Fire Stone</option>
                <option value="Vaporeon">Water Stone</option>
                <option value="Espeon">Morning Love</option>
                <option value="Umbreon">Night care</option>
                <option value="Leafeon">Leaf Stone</option>
                <option value="Glaceon">Glass Shard</option>
             </select>
             <button className="evolve" onClick={()=> setPokemon(evolution)}>Evolve</button>
            <h2 style={{color: 'lightyellow'}}>{currentPokemon?.name}</h2>
            <img src={currentPokemon?.image} className="pokemonImg"/>
            </div>
            <Link to={'/components'}><button className='compBtn'>back</button></Link>
        </div>
    )
}

export default PokemonDisplay;