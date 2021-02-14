import React, { Component } from 'react';
import Pokedex from './Pokedex';



class Pokegame extends Component{
    static defaultProps = {
        pokemons : 
        [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
        ],
    }

    render() {
        let pokedexOne = [...this.props.pokemons];
        let pokedexTwo = [];

        while(pokedexOne > pokedexTwo) {

            let randomIndex = Math.floor(Math.random()*pokedexOne.length);

            let randomPokemon = pokedexOne.splice(randomIndex, 1)[0];

            pokedexTwo.push(randomPokemon);
            
        };

        let pokedexOneExp = pokedexOne.reduce((a,b)=>{ return a+b});
        let pokedexTwoExp = pokedexTwo.reduce((a,b)=>{ return a+b});
        return (
            <div className="Pokegame">
                <Pokedex 
                    pokemons={pokedexOne}
                    totalExp={pokedexOneExp}
                    isWinner={pokedexOneExp > pokedexTwoExp}
                />
                <Pokedex 
                    pokemons={pokedexTwo} 
                    totalExp={pokedexTwoExp}
                    isWinner={pokedexTwoExp > pokedexOneExp}
                />
                
            </div>
        )
    }
}

export default Pokegame;