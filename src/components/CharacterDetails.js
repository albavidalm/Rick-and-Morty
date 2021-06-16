import React from "react";
import { Link } from "react-router-dom";

const CharacterDetails = (props) => {
  console.log(props.character);
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
                {props.character.species}
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
                {props.character.status}
              </li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
};

export default CharacterDetails;
