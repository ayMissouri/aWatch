import React from "react";
import {
  Hero,
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
      <MoviesSlider></MoviesSlider>
      <ShowsSlider></ShowsSlider>
    </Main>
  );
};

export default Home;
