import React from "react";

const FilterBySpecies = (props) => {
  const handleOnChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "specie",
    });
  };
  return (
    <fieldset className="form__specie">
      <label className="form__specie--label" htmlFor="specie">
        Elige una especie
        <select
          className="form__specie--select"
          name="specie"
          id="specie"
          onChange={handleOnChange}
        >
          <option value="all">Todos</option>
          <option value="Human">Humano</option>
          <option value="Alien">Alien</option>
        </select>
      </label>
    </fieldset>
  );
};

export default FilterBySpecies;
