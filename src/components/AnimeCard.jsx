import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

{
  /* <Link to={`/movie/${movie.id}`}></Link>; */
}

const Card = styled.div`
  width: 228px;
  /* border: 1px solid #ccc; */
  border-radius: 8px;
  padding: 16px;
  transition: 0.2s ease-in-out;
  &:hover {
    filter: drop-shadow(0px 0px 10px yellow);
  }
`;

const Poster = styled.img`
  width: 100%;
  height: 310px;
  border-radius: 7px;
`;

const Title = styled.h2`
  margin-bottom: 2px;
  font-size: 1rem;
`;

const ReleaseDate = styled.p`
  color: #777;
`;

const AnimeCard = ({ anime }) => {
  return (
    <Card>
      <Poster src={`${anime ? anime.image : ""}`} alt={anime ? anime.id : ""} />
      <Title>{anime ? anime.title : ""}</Title>
    </Card>
  );
};

export default AnimeCard;
