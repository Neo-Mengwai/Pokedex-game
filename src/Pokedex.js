import React, { Component } from 'react';
import Pokecard from './Pokecard';

class Pokedex extends Component{
    
    render() {
        return (
            <div className="Pokedex">
                <h2>Welcome to the pokedex</h2>
                {this.props.pokemons.map(pokemon =>(
                    <Pokecard
                        id={pokemon.id}
                        name={pokemon.name}
                        type={pokemon.type}
                        exp={pokemon.base_experience}
                    />
                ))}     
              
            </div>
        )
    }
}

export default Pokedex;
