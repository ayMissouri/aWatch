import React, { useRef, useState } from "react";
import styled from "styled-components";

const Main = styled.div`
  margin-top: 5px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Select = styled.select`
  width: 100%;
  max-width: 120px;
  height: 3rem;
  font-size: larger;
  border: 2px ridge #c70a46;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  text-align: center;
  background-color: #131313;
  &:hover {
    background-color: #131313;
  }
`;

const Option = styled.option`
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  z-index: 999;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: darken($select-background, 5);
`;

const Title = styled.p`
  margin-right: 15px;
  font-size: 1.25rem;
`;

export default function App({ seasons }) {
  const [selectedOption, setSelectedOption] = useState();
  console.log(seasons);

  return (
    <Main>
      <Title>Season:</Title>
      <Select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        {seasons.map((item) => (
          <Option key={item.season} value={item.season}>
            {item.season}
          </Option>
        ))}
      </Select>
    </Main>
  );
}
