import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Details = styled.div`
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  text-align: center;
  @media screen and (max-height: 667px) {
    margin-top: 5rem;
  }
  @media screen and (max-height: 740px) {
    padding-top: 0rem;
  }
  @media screen and (max-width: 280px) {
    margin-top: 0rem;
  }
`;

const Title = styled.h1`
  margin: 0.5em;
  text-decoration: underline solid #c70a46 3px;
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 2px;
    left: 2px;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #c70a46, #c70a46);
    opacity: 0.2;
    filter: blur(4px);
    pointer-events: none;
  }
`;

const Description = styled.p`
  width: 35%;
  transition: 0.5s ease-in-out;
  font-size: 18px;
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
    rgba(13, 13, 13, 0) 10%,
    rgba(13, 13, 13, 0.5) 50%,
    rgb(13, 13, 13) 100%
  );
`;

const Button = styled.button`
  margin-top: 1.5em;
  color: white;
  background: none;
  border: solid #c70a46 2px;
  border-radius: 50px;
  cursor: pointer;
  width: 10em;
  height: 3em;
  font-weight: bold;
  transition: 1s ease-in-out;
  &:hover {
    background: linear-gradient(to right, #427bf5e0, #c70a46e0);
  }
`;

const Arrow = styled.div`
  padding-top: 7rem;
  @media screen and (max-height: 667px) {
    padding-top: 1rem;
  }
  @media screen and (max-height: 740px) {
    padding-top: 2rem;
  }
  @media screen and (max-height: 740px) {
    padding-top: 4rem;
  }
  @media screen and (max-width: 280px) {
    padding-top: 1rem;
  }
`;

const randomIndex = Math.floor(Math.random() * 9);
// console.log(randomIndex);

const MainShow = ({ movie }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Redirect to the desired URL.
    navigate(`/movie/${movie[randomIndex].id}`);
  };

  return (
    <Hero>
      <Details>
        <Title>{movie[randomIndex].original_title}</Title>
        <Description>{movie[randomIndex].overview}</Description>
        <Button onClick={handleCardClick}>
          <i className="fa-solid fa-play"></i> Watch Now
        </Button>
        <Arrow>
          <i className="fa-solid fa-chevron-down fa-bounce"></i>
        </Arrow>
      </Details>
      <Image
        src={`https://image.tmdb.org/t/p/original${movie[randomIndex].backdrop_path}`}
        alt={movie[randomIndex].original_title}
      />
      <GradientOverlay />
    </Hero>
  );
};

export default MainShow;
