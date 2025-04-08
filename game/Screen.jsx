import React from "react";
import "./styles.css";

const Screen = ({ pokemones }) => {
  return (
    <div className="container-screen">
      <div className="screen-text">
        <div className="screen">
          {pokemones.map((pokemon) => (
            <div
              key={pokemon.name}
              style={{ textAlign: "center", margin: "4px" }}
            >
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
              />
              <p
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: "8px",
                }}
              >
                {pokemon.name}
              </p>
            </div>
          ))}
        </div>
        <div className="container-text">
          <p className="text">
            Nintendo <span>GAME BOY</span>
            <span style={{ fontSize: "8px" }}> TM</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Screen;
