import React, { useRef, useState } from "react";
import styled from "styled-components";

const Main = styled.div`
  margin-top: 5px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Select = styled.select`
  width: 5rem;
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

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Title = styled.p`
  margin-right: 15px;
  font-size: 1.25rem;
`;

const EpisodeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const EpisodeSquare = styled.div`
  width: 12vh;
  height: 7vh;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 7px;
  background-color: #c70a467d;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  /* backdrop-filter: blur(100px); */
`;

const EpisodeTitle = styled.span`
  color: #ffffff;
  z-index: 2;
  font-size: 1.5vh;
  font-weight: 450;
  text-align: center;
  text-shadow: 1px 1px 3px #000000;
  text-overflow: ellipsis;
  padding: 5px;
`;

export default function App({ seasons }) {
  const [selectedOption, setSelectedOption] = useState(seasons[0]?.season);

  // console.log(seasons);
  // console.log(selectedOption);

  return (
    <Main>
      <TitleContainer>
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
      </TitleContainer>

      {selectedOption && (
        <EpisodeList>
          {seasons[selectedOption - 1]?.episodes.map((episode, index) => {
            const truncatedTitle =
              episode.title.length > 40
                ? episode.title.substring(0, 40) + "..."
                : episode.title;

            return (
              <EpisodeSquare
                key={index}
                style={{
                  backgroundImage: `url(${
                    episode && episode.img && episode.img.mobile
                      ? episode.img.mobile
                      : ""
                  })`,
                }}
              >
                <EpisodeTitle>{truncatedTitle}</EpisodeTitle>
              </EpisodeSquare>
            );
          })}
        </EpisodeList>
      )}
    </Main>
  );
}
