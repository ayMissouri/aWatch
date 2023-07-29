import styled from "styled-components";

export const Main = styled.div`
  /* background: #212121; */
  /* height: 200vh; */
`;

export const Hero = styled.div`
  /* background: pink; */
  top: 0;
  height: 80vh;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MoviesSlider = styled.div`
  height: 365px;
  /* background: #5a5a5a35; */
  border-radius: 25px;
  transition: 0.5s ease-in-out;
  width: 100%;
  max-width: 1280px;
  margin: 1em 1em 5em 1em;
  @media screen and (max-width: 1325px) {
    width: 90%;
  }
`;

export const ShowsSlider = styled.div`
  height: 365px;
  /* background: #5a5a5a35; */
  border-radius: 25px;
  transition: 0.5s ease-in-out;
  width: 100%;
  max-width: 1280px;
  margin: 1em 1em 5em 1em;
  @media screen and (max-width: 1325px) {
    width: 90%;
  }
`;

export const AnimeSlider = styled.div`
  height: 365px;
  /* background: #5a5a5a35; */
  border-radius: 25px;
  transition: 0.5s ease-in-out;
  width: 100%;
  max-width: 1280px;
  margin: 1em 1em 5em 1em;
  @media screen and (max-width: 1325px) {
    width: 90%;
  }
`;
