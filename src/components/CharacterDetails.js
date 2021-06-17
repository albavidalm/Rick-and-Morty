import React from "react";
import { Link } from "react-router-dom";

const CharacterDetails = (props) => {
  const getSpecie = () => {
    if (props.character.species === "Alien") {
      return <i className="fas fa-rocket"></i>;
    } else if (props.character.species === "Human") {
      return <i className="fas fa-user"></i>;
    }
  };
  const getStatus = () => {
    if (props.character.status === "unknown") {
      return <i className="fas fa-question-circle"></i>;
    } else if (props.character.status === "Dead") {
      return <i className="fas fa-skull-crossbones"></i>;
    } else if (props.character.status === "Alive") {
      return <i className="fas fa-heart"></i>;
    }
  };

  //console.log(props.character);
  return (
    <article className="detail">
      <Link className="detail__back" to="/">
        <i className="fas fa-chevron-circle-left"></i>
        Inicio
      </Link>
      <div className="detail__card">
        <img
          className="detail__card--img"
          src={props.character.image}
          alt={`Imagen de ${props.character.name}`}
          title={props.character.name}
        />

        <div className="detail__card--info">
          <h2 className="detail__card--info-title">{props.character.name}</h2>
          <section>
            <ul className="detail__card--info-description">
              <li>
                <span className="boldtitle">Especie: </span>
                {props.character.species} {getSpecie()}
              </li>
              <li>
                <span className="boldtitle">Origen: </span>
                {props.character.origin}
              </li>
              <li>
                <span className="boldtitle">Episodios: </span>
                {props.character.episodes}
              </li>
              <li>
                <span className="boldtitle">Estado: </span>
                {props.character.status} {getStatus()}
              </li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
};

export default CharacterDetails;
