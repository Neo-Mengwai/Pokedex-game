import React, { Component } from 'react';
const imgApi = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
let padToThree = (num) =>{
    if(num >= 100){
        return num;
    }else if(num >=10){
        return `0${num}`;
    }else{
        return `00${num}`
    }
}
class Pokecard extends Component{

    render() {
        let imgSrc = `${imgApi}${padToThree(this.props.id)}.png`;
        return (
            <div className="Pokecard">
                <img src={imgSrc} className="Pokecard__img" alt={this.props.name} />

                <h3 className="Pokecard__name" >{this.props.name}</h3>
                <section className="Pokecard__details">
                    <p className="Pokecard__details--type"> {this.props.type}
                    </p> 
                    <p className="Pokecard__details--exp">{this.props.exp}
                    </p> 
                </section>
            </div>
        )
    }
}

export default Pokecard;
