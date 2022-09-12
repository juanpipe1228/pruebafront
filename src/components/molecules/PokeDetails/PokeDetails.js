import React, { useState } from "react";
import { Image, Text } from "../../index";
import "./PokeDetails.css";

const PokeDetails = (props) => {
  const {
    imagesrc,
    alt,
    pokename,
    id,
    poketype,
    pokeabilities,
    pokeheight,
    pokeweight,
    pokestats,
  } = props;

  return (
    <div className="detail">
      <div>
        <Image src={imagesrc} alt={alt} />
        <Text label={pokename} type="h2" />
      </div>
      <div className="info">
        <div className="detail-container">
          <Text label="Details: " type="h4" />
          <Text label={`Id: #${id}`} type="small" />
          <Text label={`Height: ${pokeheight} dm`} type="small" />
          <Text label={`Weight: ${pokeweight} hg`} type="small" />
        </div>
        <div className="type-container">
          <Text label="Types: " type="h4" />
          {poketype?.map((type) => {
            return (
              <div className={type?.type?.name}>
                <Text label={type?.type?.name} type="small" />
              </div>
            );
          })}
        </div>

        <div className="abilities-container">
          <Text label="Abilities: " type="h4" />
          {pokeabilities?.map((ability) => {
            return (
              <div>
                <Text label={ability?.ability?.name} type="small" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="stats-container">
        <h4>Stats: </h4>
        {pokestats?.map((stats) => {
          return (
            <div>
              <Text
                label={`${stats?.stat?.name} : ${stats?.base_stat}`}
                type="small"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokeDetails;
