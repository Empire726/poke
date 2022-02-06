import React, { useEffect, useState } from "react";
import Home from "./Component/Home/Home";
import "./App.css"
import { Header } from './Component/Header';
import { BrowserRouter } from "react-router-dom";
// import Footer from "./Component/Footer/Footer";


function App() {
  const [aPokemons, setAPokemons] = useState([]);
  const [loadPoke, setLoadPoke] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=5"
  );
  const getPokemons = async () => {
    const response = await fetch(loadPoke);
    const data = await response.json();

    function object(result) {
      result.forEach(async (pokemon) => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await response.json();
        setAPokemons((currentList) => [...currentList, data]);
      });
    }
    object(data.results);
    // console.log(aPokemons);
  };
  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <BrowserRouter>
    <Header/>
    <div className="container">
      <h1>Pokemon API</h1>

     
        <div className="components">
          {aPokemons.map((pokemon, index) => (
            <Home
              id={index + 1}
              name={pokemon.name}
              image=
              {pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              key={index}
            />
          ))}
        </div>
      
    </div>
    {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
