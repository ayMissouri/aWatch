import React from "react";
import styled from "styled-components";

const Main = styled.div`
  min-height: 60vh;
`;

function Results({ results }) {
  return (
    <Main>
      {results.map((result) => (
        <div key={result.id}>
          <h2>{result.title}</h2>
          <p>{result.overview}</p>
        </div>
      ))}
    </Main>
  );
}

export default Results;
