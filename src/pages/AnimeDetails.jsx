import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Lottie from "react-lottie";
import * as loading from "../../public/loading1.json";
import { useParams } from "react-router-dom";

const Hero = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -1;
  top: 0;
  @media screen and (max-width: 770px) {
    display: none;
  }
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  /* left: 0; */
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(
    to bottom,
    rgba(13, 13, 13, 0.3) 10%,
    rgba(13, 13, 13, 0.811) 50%,
    rgb(13, 13, 13) 100%
  );
`;

const Details = styled.div`
  /* margin-top: 7rem; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media screen and (max-height: 667px) {
    margin-top: 5rem;
  }
  @media screen and (max-height: 740px) {
    padding-top: 0rem;
  }
  @media screen and (max-width: 280px) {
    margin-top: 0rem;
  }
  @media screen and (max-width: 770px) {
    flex-direction: column;
    margin-top: 0;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  @media screen and (max-width: 770px) {
    max-width: 95%;
  }
`;

const PosterContainer = styled.div`
  position: relative;
`;

const Poster = styled.img`
  width: 300px;
  height: 424px;
  object-fit: cover;
  border-radius: 7px;
  @media screen and (max-width: 770px) {
    width: 100%;
    height: auto;
  }
`;

const MobilePlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.204);
  border: none;
  border-radius: 50%;
  font-size: 35px;
  cursor: pointer;
  z-index: 1;
  @media screen and (min-width: 771px) {
    display: none;
  }
`;

const PosterGradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(13, 13, 13, 0) 10%,
    rgba(13, 13, 13, 0.266) 50%,
    rgb(13, 13, 13) 100%
  );
  @media screen and (min-width: 771px) {
    display: none;
  }
`;

const Title = styled.h1`
  margin-left: 7rem;
  margin-bottom: 0.3rem;
  position: relative;
  transition: 0.5s ease-in-out;
  z-index: 0;
  @media screen and (max-width: 1020px) {
    margin-left: 2rem;
  }
  @media screen and (max-width: 770px) {
    margin-left: 1rem;
    font-size: 22px;
    margin-top: 1rem;
  }
`;

const TagLine = styled.p`
  margin-left: 7rem;
  margin-bottom: 1rem;
  font-size: 16px;
  transition: 0.5s ease-in-out;
  @media screen and (max-width: 1020px) {
    margin-left: 2rem;
  }
  @media screen and (max-width: 770px) {
    margin-left: 1rem;
    font-size: 16px;
  }
`;

const Genres = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin-left: 7rem;
  margin-bottom: 1rem;
  transition: 0.5s ease-in-out;
  overflow: auto;
  flex-wrap: wrap;
  @media screen and (max-width: 1020px) {
    margin-left: 2rem;
  }
  @media screen and (max-width: 770px) {
    margin-left: 1rem;
  }
`;

const GenreLi = styled.li`
  background: #c70a4619;
  color: #ff0051;
  font-weight: 450;
  border-radius: 25px;
  margin-left: 0.5rem;
  margin-top: 0.3rem;
  padding: 0.2rem 0.7rem 0.2rem 0.7rem;
  white-space: nowrap;
`;

const Description = styled.p`
  margin-left: 7rem;
  margin-bottom: 1.5rem;
  transition: 0.5s ease-in-out;
  font-size: 18px;
  color: #dfdfdf;
  @media screen and (max-width: 1020px) {
    margin-left: 2rem;
    font-size: 16px;
  }
  @media screen and (max-width: 770px) {
    margin-left: 1rem;
    font-size: 0.9rem;
  }
`;

const Rating = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 7rem;
  margin-bottom: 1.5rem;
  transition: 0.5s ease-in-out;
  font-size: 24px;
  @media screen and (max-width: 1020px) {
    margin-left: 2rem;
  }
  @media screen and (max-width: 770px) {
    margin-left: 1rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
`;

const PlayButton = styled.button`
  width: 186px;
  height: 48px;
  margin-left: 7rem;
  transition: 0.5s ease-in-out;
  border-radius: 12px;
  color: black;
  font-weight: 500;
  font-size: 1.2rem;
  padding-right: 1rem;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  &:hover {
    transform: scale(1.03);
    transition: 0.2s ease-in-out;
  }
  @media screen and (max-width: 1020px) {
    margin-left: 2rem;
  }
  @media screen and (max-width: 770px) {
    display: none;
  }
`;

const BookmarkButton = styled.button`
  width: 186px;
  height: 48px;
  margin-left: 1rem;
  transition: 0.5s ease-in-out;
  border-radius: 12px;
  color: #ffffff;
  background: black;
  font-weight: 500;
  font-size: 1.2rem;
  padding-right: 1rem;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid white;
  &:hover {
    transform: scale(1.03);
    transition: 0.2s ease-in-out;
  }
  @media screen and (max-width: 1020px) {
    margin-left: 2rem;
  }
  @media screen and (max-width: 770px) {
    width: 95%;
    margin-left: auto;
  }
`;

const LoadingDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const loadingOptions = {
  loop: true,
  autoplay: true,
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const AnimeDetails = () => {
  const params = useParams();
  const id = params.animeid;

  const [data, setData] = useState(null);

  console.log(data);

  useEffect(() => {
    const url = `https://api.amissouri.uk/meta/anilist/info/${id}`;
    const getMovieInfo = async () => {
      try {
        const { data } = await axios.get(url);
        setData(data);
      } catch (err) {
        throw new Error(err.message);
      }
    };

    getMovieInfo();
  }, []);

  return (
    <>
      {!data ? (
        <LoadingDiv>
          <Lottie options={loadingOptions} height={250} width={250} />
          <h1>Loading...</h1>
        </LoadingDiv>
      ) : (
        <>
          <Hero>
            <Details>
              <PosterContainer>
                <Poster src={data.image} alt={data.title.english} />
                <PosterGradientOverlay />
                <MobilePlayButton onClick={() => console.log("play")}>
                  <i className="fa-solid fa-play"></i>
                </MobilePlayButton>
              </PosterContainer>
              <Info>
                <Title>{data.title.english}</Title>
                <TagLine>
                  {data.tagline ? (
                    <p style={{ color: "#b9b9b9" }}>"{data.tagline}"</p>
                  ) : (
                    ""
                  )}
                </TagLine>
                <Genres>
                  {data.genres?.map((genre) => {
                    return <GenreLi key={genre}>{genre}</GenreLi>;
                  })}
                </Genres>
                <Description>{data.description}</Description>
                <Rating>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#ffdd00", marginRight: "10px" }}
                  >
                    {" "}
                  </i>
                  <p> {data.rating}/100 </p>
                </Rating>
                <Buttons>
                  <PlayButton>
                    <i
                      className="fa-solid fa-play"
                      style={{ color: "#000", marginRight: "5px" }}
                    ></i>
                    Play now
                  </PlayButton>
                  <BookmarkButton>
                    <i
                      className="fa-regular fa-bookmark"
                      style={{ marginRight: "5px" }}
                    ></i>
                    Bookmark
                  </BookmarkButton>
                </Buttons>
              </Info>
            </Details>
            <Image src={data.cover} alt={data.title.english} />
            <GradientOverlay />
          </Hero>
        </>
      )}
    </>
  );
};

export default AnimeDetails;
