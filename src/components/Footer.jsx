import React from "react";
import styled, { keyframes } from "styled-components";

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, #c70a46c4, #a000eb 48.44%, #00a57d);
  filter: blur(50px);
  opacity: 0.3;
  position: absolute;
  z-index: 0;
`;

const Main = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 1rem;
`;

const Content = styled.div`
  max-width: 1280px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  z-index: 10;
  position: relative;
`;

const Welcome = styled.div`
  align-items: flex-start;
`;

const Logo = styled.a`
  margin-bottom: 1rem;
  color: inherit;
  text-decoration: inherit;
`;

const LogoImg = styled.img`
  display: block;
  vertical-align: middle;
  overflow-clip-margin: content-box;
  overflow: clip;
`;

function Footer() {
  return (
    <Main>
      <Container>
        <Content>
          <Welcome>
            <Logo>
              <LogoImg
                src="/awatch.png"
                alt="aWatch logo"
                loading="lazy"
                height={64}
              />
            </Logo>
          </Welcome>
        </Content>
      </Container>
      <Backdrop />
    </Main>
  );
}

export default Footer;
