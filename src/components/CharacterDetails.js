import React from "react";
import { Link } from "react-router-dom";

const CharacterDetails = (props) => {
  console.log(props.character);
  return (
    <div className="details__content">
      <Link to="/">Inicio</Link>
      <header className="details__header">
        <h2 className="details__title">{props.character.name}</h2>
      </header>
      <section>
        <img
          className="details__img"
          src={props.character.image}
          alt={`Imagen de ${props.character.name}`}
          title={props.character.name}
        />
        <ul className="details__ul">
          <li>Especie: {props.character.species}</li>
          <li>Origen: {props.character.origin}</li>
          <li>Episodios: {props.character.episodes}</li>
          <li>Estado: {props.character.status}</li>
        </ul>
      </section>
    </div>
  );
};

export default CharacterDetails;
