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
  const [type, setType] = useState("movie");
  const [one, setOne] = useState(1);

  useEffect(() => {
    api.fetchGenres().then(setGenres);
  }, []);

  useEffect(() => {
    api.searchMovies(searchQuery, selectedGenres, type).then(setMovies);
  }, [searchQuery, selectedGenres, one]);

  return (
    <div>
      <SearchBar
        onSearch={setSearchQuery}
        onSearch2={setType}
        clearResults={setMovies}
        one={setOne}
      />
      {/* <GenreFilter
        genres={genres}
        selectedGenres={selectedGenres}
        onSelectGenre={setSelectedGenres}
        searchQuery={searchQuery}
        setMovies={setMovies}
      /> */}
      <Results results={movies} type={type} />
    </div>
  );
}

export default Discover;
