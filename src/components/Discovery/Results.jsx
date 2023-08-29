import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  min-height: 60vh;
  max-width: 75%;
  margin: 0 auto;
  @media screen and (max-width: 784px) {
    max-width: 90%;
  }
`;

const Card = styled.div`
  width: 14vw;
  background-color: #26262680;
  border-radius: 12px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
  @media screen and (max-width: 784px) {
    width: 9rem;
  }
  @media screen and (max-width: 371px) {
    width: auto;
  }
`;

const Poster = styled.img`
  max-width: 100%;
  height: auto;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const ReleaseDate = styled.p`
  color: gray;
`;

function Results({ results }) {
  // console.log(results);
  const navigate = useNavigate();

  const handleCardClick = (result) => {
    navigate(`/movie/${result}`);
  };

  return (
    <Main>
      {results.map((result) => (
        <Card key={result.id} onClick={() => handleCardClick(result.id)}>
          <Poster
            src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
            alt={`${result.title} Poster`}
          />
          <Title>{result.title}</Title>
          <ReleaseDate>{result.release_date}</ReleaseDate>
        </Card>
      ))}
    </Main>
  );
}

export default Results;
