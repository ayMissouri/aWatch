import React, { useRef, useState } from "react";
import styled from "styled-components";

const Main = styled.div`
  /* background-color: pink; */
  margin-top: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Select = styled.select`
  width: 100%;
  max-width: 500px;
  height: 2rem;
  font-size: larger;
  border: none;
  color: white;
  background-color: black;
`;

export default function App({ seasons }) {
  const [selectedOption, setSelectedOption] = useState();
  console.log(seasons);

  return (
    <Main>
      <Select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        {seasons.map((item) => (
          <option key={item.season} value={item.season}>
            {item.season}
          </option>
        ))}
      </Select>
    </Main>
  );
}
