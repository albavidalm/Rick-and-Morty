import React from "react";

const CharacterDetails = () => {
  return (
    <div className="details__content">
      <header className="details__header">
        <h2 className="details__title">Nombre Personaje</h2>
        <span className="icon fas"></span>
      </header>
      <section>
        <p>Aquí la imagen</p>
        <ul className="details__ul">
          <li>Especie</li>
          <li>Descripción</li>
          <li>Vivo</li>
        </ul>
      </section>
    </div>
  );
};

export default CharacterDetails;
