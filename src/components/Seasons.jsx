import React, { useRef, useState } from "react";
import styled from "styled-components";

const Main = styled.div`
  /* background-color: pink; */
  margin-top: 5px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Select = styled.select`
  width: 100%;
  max-width: 120px;
  height: 4rem;
  font-size: larger;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  text-align: center;
  background-color: #262626;
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
