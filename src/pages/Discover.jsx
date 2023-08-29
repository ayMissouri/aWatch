import React, { useState, useEffect } from "react";
import SearchBar from "../components/Discovery/SearchBar";
import GenreFilter from "../components/Discovery/GenreFilter";
import Results from "../components/Discovery/Results";
import api from "../components/Discovery/api";

function Discover() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    api.fetchGenres().then(setGenres);
    api.searchMovies(searchQuery, selectedGenre).then(setMovies);
  }, [searchQuery, selectedGenre]);

  return (
    <div>
      <SearchBar onSearch={setSearchQuery} />
      <GenreFilter
        genres={genres}
        selectedGenre={selectedGenre}
        onSelectGenre={setSelectedGenre}
      />
      <Results results={movies} />
    </div>
  );
}

export default Discover;
