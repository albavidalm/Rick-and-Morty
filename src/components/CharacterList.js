import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  let characterElements = "";
  if (props.characters.length !== 0) {
    characterElements = props.characters.map((character) => {
      return <CharacterCard key={character.id} character={character} />;
    });
  } else {
    characterElements = (
      <div className="message">
        <h2 className="not-found">Personaje no encontrado</h2>
      </div>
    );
  }
  return (
    <section className="cards__container">
      <ul className="cards">{characterElements}</ul>
    </section>
  );
};

export default CharacterList;
