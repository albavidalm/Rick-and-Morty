import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  //console.log(props.character.name); //Datos props recibidos OK
  return (
    <Link to={`/character/${props.character.id}`}>
      <li className="card">
        <img
          className="card__img"
          src={props.character.image}
          alt={`Imagen de ${props.character.name}`}
          title={props.character.name}
        />
        <h4 className="card__title">{props.character.name}</h4>
        <p className="card__specie">{props.character.species}</p>
      </li>
    </Link>
  );
};

export default CharacterCard;
