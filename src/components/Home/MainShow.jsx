import styled from "styled-components";

const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* Added to vertically center the content */
  height: 100vh; /* Added to make the hero section full height */
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1``;

const Description = styled.p`
  width: 35%;
  transition: 0.5s ease-in-out;
  @media screen and (max-width: 1280px) {
    width: 75%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -1;
  top: 0;
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
    rgba(13, 13, 13, 0) 0%,
    rgba(13, 13, 13, 0.169) 50%,
    rgb(13, 13, 13) 100%
  );
`;

const MainShow = () => {
  const data = {
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

  return (
    <Hero>
      <Details>
        <Title>{data.original_title}</Title>
        <Description>{data.overview}</Description>
      </Details>
      <Image
        src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
        alt={data.original_title}
      />
      <GradientOverlay />
    </Hero>
  );
};

export default MainShow;
