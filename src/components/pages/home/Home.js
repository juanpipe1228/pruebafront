import React from "react";
import { useState, useEffect } from "react";
import { Card, Text } from "../../index";
import "./Home.css";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  // Codigo para obtener de API

  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=24&offset=0"
  );
  const [nexturl, setNexturl] = useState();
  const [pokemons, setPokemons] = useState([]);

  // Se extraen las urls de la api
  const getURLPokemons = async () => {
    const response = await axios.get(url);
    const data = (await response).data;
    setNexturl(data.next);
    createPokemon(data.results);
  };

  const createPokemon = async (data) => {
    data.forEach(async (item) => {
      const response = await axios.get(item.url);
      setPokemons((currentList) => [...currentList, response]);
      // pokemons.sort((a, b) => a.id - b.id);
    });
    console.log(pokemons);
  };

  useEffect(() => {
    console.log("Effect");
    getURLPokemons();
  }, [url]);

  const handleClick = () => {
    console.log("Hiciste click");
    setUrl(nexturl);
  };

  return (
    <div>
      <div className="header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
          alt="Pokemon"
        />
        <Text label="All Pokemons" type="h1" />
      </div>
      <div className="container">
        {pokemons?.map((props) => {
          return (
            <Link to={`/pokemon/${props.data.id}`}>
              <Card
                key={props.data.id}
                imagesrc={props.data.sprites.other.dream_world.front_default}
                alt={props.data.name}
                pokename={props.data.name}
                id={props.data.id}
                poketype={props.data.types}
              />
            </Link>
          );
        })}
      </div>
      <div className="button">
        <button onClick={handleClick}>Load more pokemons</button>
      </div>
    </div>
  );
};

export default Home;
