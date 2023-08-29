import React, { useState, useEffect } from "react";
import SearchBar from "../components/Discovery/SearchBar";
import GenreFilter from "../components/Discovery/GenreFilter";
import Results from "../components/Discovery/Results";
import api from "../components/Discovery/api";

function Discover() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    api.fetchGenres().then(setGenres);
  }, []);

  useEffect(() => {
    api.searchMovies(searchQuery, selectedGenres).then(setMovies);
  }, [searchQuery, selectedGenres]);

  return (
    <div>
      <SearchBar onSearch={setSearchQuery} />
      {/* <GenreFilter
        genres={genres}
        selectedGenres={selectedGenres}
        onSelectGenre={setSelectedGenres}
        searchQuery={searchQuery}
        setMovies={setMovies}
      /> */}
      <Results results={movies} />
    </div>
  );
}

export default Discover;
