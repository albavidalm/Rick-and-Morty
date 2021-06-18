import React from "react";

const FilterByOrigin = (props) => {
  const handleOnChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "origin",
    });
  };

  return (
    <fieldset className="form__origin">
      <label className="form__origin--label" htmlFor="origin">
        Busca por planeta:
      </label>
      <input
        className="form__origin--input"
        type="text"
        placeholder="Ej: Earth"
        name="origin"
        id="origin"
        onChange={handleOnChange}
      />
    </fieldset>
  );
};

export default FilterByOrigin;
