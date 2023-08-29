import React, { useState } from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 25px;
  padding-bottom: 25px;
  margin-bottom: 25px;
  border-bottom: solid 1px #c70a46;
`;

const Input = styled.input`
  background-color: #26262680;
  height: 35px;
  width: 40%;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  border: solid 1px #c70a46;
  border-radius: 12px;
  margin-right: 10px;
  padding: 5px;
`;

const Button = styled.button`
  width: 5rem;
  background-color: #26262680;
  border: solid 1px #c70a46;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(90deg, #c70a46, #a100eb 48.44%, #00a57c);
  }
`;

const Select = styled.select`
  width: 5rem;
  max-width: 120px;
  margin-right: 10px;
  border: solid 1px #c70a46;
  border-radius: 12px;
  color: white;
  font-weight: 700;
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

function SearchBar({ onSearch, onSearch2, clearResults, one }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [type, setType] = useState("movie");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    onSearch(searchQuery);
    onSearch2(type);
    one(type);
  };

  return (
    <Main>
      <Select
        value={type}
        onChange={(e) => {
          setType(e.target.value);
          clearResults([]);
        }}
      >
        <Option key={"movie"} value={"movie"}>
          Movies
        </Option>
        <Option key={"tv"} value={"tv"}>
          Tv Shows
        </Option>
      </Select>
      <Input
        type="text"
        value={searchQuery}
        placeholder="Search..."
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <Button onClick={handleSearch}>Search</Button>
    </Main>
  );
}

export default SearchBar;
