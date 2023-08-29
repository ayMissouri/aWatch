import React from "react";

function GenreFilter({ genres, selectedGenre, onSelectGenre }) {
  return (
    <div>
      <select
        value={selectedGenre}
        onChange={(e) => onSelectGenre(e.target.value)}
      >
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default GenreFilter;
