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
  background-color: none;
  border-radius: 12px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
  border: 0.5px solid transparent;
  &:hover {
    border: 0.5px solid #c70a46;
  }
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
  border-radius: 12px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const ReleaseDate = styled.p`
  color: gray;
`;

function Results({ results, type }) {
  console.log(results);
  const navigate = useNavigate();

  const handleCardClick = (result, type) => {
    if (type === "tv") {
      type = "show";
    } else {
      type = "movie";
    }
    navigate(`/${type}/${result}`);
  };

  return (
    <Main>
      {results.map((result) => {
        if (result.poster_path !== null) {
          return (
            <Card
              key={result.id}
              onClick={() => handleCardClick(result.id, type)}
            >
              <Poster
                src={
                  result.poster_path
                    ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                    : "https://cdn.publicsectornetwork.com/insight/feature_images/placeholder_595bd4.jpg"
                }
                alt={`${result.title} Poster`}
              />
              <Title>{result.title ? result.title : result.name}</Title>
              <ReleaseDate>
                {result.release_date
                  ? result.release_date
                  : result.first_air_date}
              </ReleaseDate>
            </Card>
          );
        }
        return null;
      })}
    </Main>
  );
}

export default Results;
