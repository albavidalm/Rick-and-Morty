import React, { useEffect, useState } from "react";
import "../stylesheets/App.scss";
import getDataFromApi from "../services/getDataFromApi";
import ls from "../services/local-storage";
import logo from "../images/Rick_and_Morty_-_logo.png";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetails from "./CharacterDetails";

const App = () => {
  const [characters, setCharacters] = useState(ls.get("characters", []));
  const [nameFilter, setNameFilter] = useState("");
  const [specieFilter, setSpecieFilter] = useState("all");

  //COMPROBANDO SI HAY DATOS EN EL LOCALSTORAGE -------------------------------
  useEffect(() => {
    if (characters.length === 0) {
      getDataFromApi().then((data) => setCharacters(data));
    }
  }, []);

  //GUARDANDO EN LOCALSTORAGE -------------------------------
  useEffect(() => {
    ls.set("characters", characters);
  }, [characters]);

  //EVENTOS DE FILTRO -------------------------------
  const handleFilter = (data) => {
    //console.log(data);
    if (data.key === "name") {
      setNameFilter(data.value);
    } else if (data.key === "specie") {
      setSpecieFilter(data.value);
    }
  };
  // console.log("Specie: ", specieFilter); // Estado specie recogido OK

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(nameFilter.toLowerCase());
    })
    .filter((character) => {
      if (specieFilter === "all") {
        return true;
      } else {
        return character.specie === specieFilter;
      }
    });

  return (
    <>
      <header>
        <h1 className="header__title">Rick and Morty</h1>
        <img
          className="header__img"
          src={logo}
          alt="Rick and Morty logo"
          title="Rick and Morty logo"
        />
        <Filters handleFilter={handleFilter} />
      </header>
      <div className="main">
        <CharacterList characters={filteredCharacters} />
        <CharacterDetails />
      </div>
    </>
  );
};

export default App;
