import React, { useEffect, useState } from "react";
import {
  Hero,
  List,
  Main,
  MoviesSlider,
  ShowsSlider,
} from "../components/Home/HomeElements";
import MainShow from "../components/Home/MainShow";
import styled from "styled-components";
import axios from "axios";
import Slider from "../components/Slider/Slider";
import SliderTv from "../components/Slider/SliderTV";
import Lottie from "react-lottie";
import * as loading from "../../public/loading1.json";

const loadingOptions = {
  loop: true,
  autoplay: true,
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const SliderTitle = styled.div`
  display: flex;
  align-items: center;
  cursor: default;
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

const MoviesTitle = styled.h2`
  background-image: linear-gradient(45deg, #fbacc5, #c70a46, #f07ea2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ShowsTitle = styled.h2`
  background-image: linear-gradient(45deg, yellow, #f3f3b1, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LoadingDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [shows, setShows] = useState(null);

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/discover/movie?api_key=db319c6e116fed7f38628e30ff441b3e&with_genres=&with_networks=&with_keywords=&language=en-US&page=1&include_adult=false&sort_by=popularity.desc&watch_region=US";
    const getPopularMovies = async () => {
      try {
        const data = await axios.get(url);
        setMovies(data.data.results);
      } catch (err) {
        throw new Error(err.message);
      }
    };

    getPopularMovies();
  }, []);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDVhZDk0OTA3MjE1ZTExN2ZiM2E2ODUxZTA5ZTExYyIsInN1YiI6IjYxYzU4MTk5ZTcyZmU4MDA4NTcyZmIxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.95IxkLrZnLinOPUjX0ppd1XSzVDwDIvKA0QYlUHfjF0",
      },
    };
    const getPopularShows = async () => {
      try {
        const data = await axios.request(options);
        setShows(data.data.results);
      } catch (err) {
        throw new Error(err.message);
      }
    };

    getPopularShows();
  }, []);

  // console.log(movies);
  // console.log(shows);

  return (
    <>
      {!movies && !shows ? (
        <LoadingDiv>
          <Lottie options={loadingOptions} height={250} width={250} />
          <h1>Loading...</h1>
        </LoadingDiv>
      ) : (
        <Main>
          <Hero>
            <MainShow movie={movies ? movies : ""}></MainShow>
          </Hero>
          <List>
            <MoviesSlider>
              <SliderTitle>
                <MoviesIcon className="fa-solid fa-fire"></MoviesIcon>
                <MoviesTitle>Movies</MoviesTitle>
              </SliderTitle>
              <Slider movies={movies}></Slider>
            </MoviesSlider>
            <ShowsSlider>
              <SliderTitle>
                <ShowsIcon className="fa-solid fa-bolt-lightning"></ShowsIcon>
                <ShowsTitle>Shows</ShowsTitle>
              </SliderTitle>
              <SliderTv shows={shows}></SliderTv>
            </ShowsSlider>
          </List>
        </Main>
      )}
    </>
  );
};

export default Home;
