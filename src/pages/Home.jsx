import React from "react";
import {
  Hero,
  List,
  Main,
  MoviesSlider,
  ShowsSlider,
} from "../components/Home/HomeElements";
import MainShow from "../components/Home/MainShow";

const Home = () => {
  return (
    <Main>
      <Hero>
        <MainShow></MainShow>
      </Hero>
      <List>
        <MoviesSlider>Trending Movies</MoviesSlider>
        <ShowsSlider>Trending Shows</ShowsSlider>
      </List>
    </Main>
  );
};

export default Home;
