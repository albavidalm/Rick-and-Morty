const getDataFromApi = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      /* Mapeo el array data para limpiarlo */
      return data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          species: character.species,
          status: character.status,
          image: character.image,
          origin: character.origin.name,
          episodes: character.episode.length,
        };
      });
    });
};

export default getDataFromApi;
