import React, { Component } from 'react'

export class PokemonSearch extends Component {
  render() {
    return (
      <div>
        Hello
      </div>
    )
  }
  private searchPokemon = () => {
    const inputValue = "pikachu";
    // (this.pokemonRef.current.value).toLowerCase();
    const baseURL = "https://pokeapi.co/api/v2/pokemon/";
    fetch(`${baseURL}${inputValue}`).then((res) => {
      if (res.status !== 200) {
        this.setState({ error: true });
        return;
      }
      res.json().then((data) => {
        
      });
    });
  // private onSearchKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === "Enter") {
  //     this.searchPokemon();
  //   }
  // }
  }
  // capitalize = (str) => {
  //   return str.charAt(0).toUpperCase() + str.slice(1);
  // }
}

export default PokemonSearch;
