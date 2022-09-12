import React from "react";
import { useState, useEffect } from "react";
import { Text, Image, PokeDetails } from "../../index";
import axios from "axios";
import "./Detail.css";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);

  // Se extraen las urls de la api
  const getURLPokemons = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = response.data;
    setPokemon(data);
  };

  useEffect(() => {
    console.log("Effect");
    getURLPokemons();
  }, []);

  return (
    <div>
      <div className="header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
          alt="Pokemon"
        />
      </div>
      <div className="container">
        <PokeDetails
          key={pokemon?.id}
          imagesrc={pokemon?.sprites?.other?.dream_world?.front_default}
          alt={pokemon?.name}
          pokename={pokemon?.name}
          id={pokemon?.id}
          pokeheight={pokemon?.height}
          pokeweight={pokemon?.weight}
          poketype={pokemon?.types}
          pokeabilities={pokemon?.abilities}
          pokestats={pokemon?.stats}
        />
      </div>
      <div className="button-home">
        <a href="/">Home</a>
      </div>
    </div>
  );
};

export default Detail;
