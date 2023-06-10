import React from "react";
import {
  Hero,
  List,
  Main,
  MoviesSlider,
  ShowsSlider,
} from "../components/Home/HomeElements";
import MainShow from "../components/Home/MainShow";
import MovieCard from "../components/MovieCard";
import styled from "styled-components";
import ShowCard from "../components/ShowCard";

const movie = {
  adult: false,
  backdrop_path: "/h8gHn0OzBoaefsYseUByqsmEDMY.jpg",
  genre_ids: [28, 53, 80],
  id: 603692,
  original_language: "en",
  original_title: "John Wick: Chapter 4",
  overview:
    "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
  popularity: 4071.868,
  poster_path: "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
  release_date: "2023-03-22",
  title: "John Wick: Chapter 4",
  video: false,
  vote_average: 7.9,
  vote_count: 2758,
};

const show = {
  backdrop_path: "/xkiv3e1daoqil5MRJitCJcwUgk2.jpg",
  first_air_date: "2021-10-31",
  genre_ids: [10764],
  id: 114294,
  name: "Judy Justice",
  origin_country: ["US"],
  original_language: "en",
  original_name: "Judy Justice",
  overview:
    "The Honorable Judy Sheindlin, retired Judge of the Manhattan family Court, brings her signature blend of sharp wit and wisdom, hilarious candor and unwavering honesty that has made her America’s favorite judge for over 25 years, as she presides over real cases, arbitrates binding decisions and delivers what only she can: “Judy Justice.”",
  popularity: 2995.502,
  poster_path: "/4E8Rb9vPbixxC0ZdzSkvE5fpeQa.jpg",
  vote_average: 4,
  vote_count: 13,
};

const SliderTitle = styled.div`
  display: flex;
  align-items: center;
`;

const MoviesIcon = styled.i`
  margin-right: 5px;
  color: #c70a46;
  font-size: 24px;
`;

const ShowsIcon = styled.i`
  margin-right: 5px;
  color: yellow;
  font-size: 24px;
`;

const Home = () => {
  return (
    <Main>
      <Hero>
        <MainShow></MainShow>
      </Hero>
      <List>
        <MoviesSlider>
          <SliderTitle>
            <MoviesIcon className="fa-solid fa-fire"></MoviesIcon>
            <h2>Movies</h2>
          </SliderTitle>
          <MovieCard movie={movie}></MovieCard>
        </MoviesSlider>
        <ShowsSlider>
          <SliderTitle>
            <ShowsIcon className="fa-solid fa-bolt-lightning"></ShowsIcon>
            <h2>Shows</h2>
          </SliderTitle>
          <ShowCard show={show}></ShowCard>
        </ShowsSlider>
      </List>
    </Main>
  );
};

export default Home;
