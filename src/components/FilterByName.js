import React from "react";

const FilterByName = (props) => {
  const handleOnChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };

  return (
    <fieldset className="form__name">
      <label className="form__name--label" htmlFor="name">
        Busca un personaje:
      </label>
      <input
        className="form__name--input"
        type="text"
        placeholder="Ej: Rick"
        name="name"
        id="name"
        onChange={handleOnChange}
      />
    </fieldset>
  );
};

export default FilterByName;
