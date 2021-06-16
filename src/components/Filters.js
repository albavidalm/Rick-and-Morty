import React from "react";
import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section>
      <form className="form" action="" onSubmit={handleSubmit}>
        <FilterByName handleFilter={props.handleFilter} />
        <FilterBySpecies handleFilter={props.handleFilter} />
      </form>
    </section>
  );
};

export default Filters;
