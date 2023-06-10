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

const ShowCard = ({ show }) => {
  return (
    <Card>
      <Poster
        src={`https://image.tmdb.org/t/p/original${show.poster_path}`}
        alt={show.original_name}
      />
      <Title>{show.original_name}</Title>
      <ReleaseDate>{show.first_air_date}</ReleaseDate>
    </Card>
  );
};

export default ShowCard;
