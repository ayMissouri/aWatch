import React from "react";
import styled from "styled-components";
import api from "./api";

const Main = styled.div``;

const GenreButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const GenreButton = styled.button`
  margin: 5px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  background-color: ${({ selected }) => (selected ? "#007bff" : "#040404")};
  color: ${({ selected }) => (selected ? "#fff" : "inherit")};
  cursor: pointer;

  &:hover {
    background-color: ${({ selected }) => (selected ? "#0056b3" : "#f0f0f0")};
  }
`;

function GenreFilter({
  genres,
  selectedGenres,
  onSelectGenre,
  searchQuery,
  setMovies,
}) {
  const handleGenreToggle = (genreId) => {
    const updatedGenres = selectedGenres.includes(genreId)
      ? selectedGenres.filter((id) => id !== genreId)
      : [...selectedGenres, genreId];
    onSelectGenre(updatedGenres);

    // Trigger the API call to fetch movies with updated genres
    api.searchMovies(searchQuery, updatedGenres).then(setMovies);
  };

  return (
    <div>
      <h3>Genres:</h3>
      <GenreButtons>
        {genres.map((genre) => (
          <GenreButton
            key={genre.id}
            selected={selectedGenres.includes(genre.id)}
            onClick={() => handleGenreToggle(genre.id)}
          >
            {genre.name}
          </GenreButton>
        ))}
      </GenreButtons>
    </div>
  );
}

export default GenreFilter;
