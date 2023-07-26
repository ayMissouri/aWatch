import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
  cursor: crosshair;
  &:hover {
    filter: drop-shadow(0px 0px 10px #9b12a5);
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
  ${Card}:hover & {
    text-decoration: underline;
  }
`;

const ReleaseDate = styled.p`
  color: #777;
`;

const AnimeCard = ({ anime }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Redirect to the desired URL.
    navigate(`/anime/${anime.id}`);
  };

  return (
    <Card onClick={handleCardClick}>
      <Poster src={`${anime.image}`} alt={anime.id} />
      <Title>{anime.title.english}</Title>
    </Card>
  );
};

export default AnimeCard;
