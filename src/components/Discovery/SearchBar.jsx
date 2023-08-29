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

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <Main>
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
