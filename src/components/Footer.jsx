import React from "react";
import styled, { keyframes } from "styled-components";

const Backdrop = styled.div`
  width: 100%;
  height: 30vh;
  background-image: linear-gradient(90deg, #c70a46c4, #a000eb 48.44%, #00a57d);
  filter: blur(50px);
  opacity: 0.3;
  position: absolute;
  z-index: 0;
`;

const Main = styled.div`
  width: 100%;
  height: 30vh;
`;

function Footer() {
  return (
    <Main>
      <Backdrop />
    </Main>
  );
}

export default Footer;
