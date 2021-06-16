import React from "react";

const CharacterCard = (props) => {
  //console.log(props.character.name); //Datos props recibidos OK
  return (
    <li className="card">
      <img
        className="card__img"
        src={props.character.image}
        alt={props.character.name}
        title={props.character.name}
      />
      <h4 className="card__title">{props.character.name}</h4>
      <p className="card__specie">{props.character.species}</p>
    </li>
  );
};

export default CharacterCard;
