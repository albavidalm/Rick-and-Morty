import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import getDataFromApi from "../services/getDataFromApi";
import ls from "../services/local-storage";
import "../stylesheets/App.scss";
import logo from "../images/Rick_and_Morty_-_logo.png";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetails from "./CharacterDetails";

const App = () => {
  const charactersFromLocalStorage = ls.get("characters", []);
  const [characters, setCharacters] = useState(charactersFromLocalStorage);
  const [nameFilter, setNameFilter] = useState("");
  const [specieFilter, setSpecieFilter] = useState("all");

  //COMPROBANDO SI HAY DATOS EN EL LOCALSTORAGE -------------------------------
  useEffect(() => {
    if (charactersFromLocalStorage.length === 0) {
      getDataFromApi().then((data) => setCharacters(data));
    }
  }, [charactersFromLocalStorage]);

  //GUARDANDO EN LOCALSTORAGE -------------------------------
  useEffect(() => {
    ls.set("characters", characters);
  }, [characters]);

  //EVENTOS DE FILTRO -------------------------------
  const handleFilter = (data) => {
    if (data.key === "name") {
      setNameFilter(data.value);
    } else if (data.key === "specie") {
      setSpecieFilter(data.value);
    }
  };

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(nameFilter.toLowerCase());
    })
    .filter((character) => {
      if (specieFilter === "all") {
        return true;
      } else {
        return character.species === specieFilter;
      }
    });

  const renderCharacterDetails = (props) => {
    const routeCharacterId = parseInt(props.match.params.id);
    const foundCharacter = characters.find((character) => {
      return character.id === routeCharacterId;
    });
    //console.log("Router props: ", props.match.params.id, foundCharacter);
    if (foundCharacter !== undefined) {
      return <CharacterDetails character={foundCharacter} />;
    } else {
      return <h2 className="not-found">Personaje no encontrado</h2>;
    }
  };

  return (
    <>
      <h1 className="header__title">Rick and Morty</h1>
      <img
        className="header__img"
        src={logo}
        alt="Rick and Morty logo"
        title="Rick and Morty logo"
      />
      <Switch>
        <Route exact path="/">
          <div className="main">
            <Filters handleFilter={handleFilter} />
            <CharacterList characters={filteredCharacters} />
          </div>
        </Route>
        <Route path="/character/:id" render={renderCharacterDetails} />
      </Switch>
    </>
  );
};

export default App;
