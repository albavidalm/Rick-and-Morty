import React from "react";

const FilterBySpecies = (props) => {
  const handleOnChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "specie",
    });
  };
  return (
    <>
      <label className="form__label display-block" htmlFor="specie">
        Filtra por especie
        <select
          className="form__input-text"
          name="specie"
          id="specie"
          onChange={handleOnChange}
        >
          <option value="all">Todos</option>
          <option value="human">Humano</option>
          <option value="alien">Alien</option>
        </select>
      </label>
    </>
  );
};

export default FilterBySpecies;
