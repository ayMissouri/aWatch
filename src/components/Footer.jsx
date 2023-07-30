import React from "react";
import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 5rem;
  padding-top: 2rem;
`;

const Container = styled.div`
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 1rem;
  position: relative;
  z-index: 1;
`;

const Content = styled.div`
  max-width: 1280px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const Backdrop = styled.div`
  content: "";
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, #c70a46c4, #a000eb 48.44%, #00a57d);
  filter: blur(50px);
  opacity: 0.3;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
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
  height: 2.5rem;
`;

const WelcomeTo = styled.div`
  --tw-text-opacity: 1;
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  line-height: 1.5rem;
`;

const DisclaimerContainer = styled.div`
  margin-top: 0.5rem;
`;

const Disclaimer = styled.p`
  text-align: left;
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin: 0;
`;

const Links = styled.div`
  flex-direction: row;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  display: flex;
  margin-bottom: 1rem;
  max-width: 1280px;
  margin-top: 1rem;
`;

const LinkList = styled.ul`
  flex-direction: row;
  order: 1;
  align-items: center;
  gap: 2rem;
  display: flex;
  list-style: none;
`;

function Footer() {
  return (
    <Main>
      <Container>
        <Content>
          <Welcome>
            <Logo>
              <LogoImg src="/awatch.png" alt="aWatch logo" loading="lazy" />
            </Logo>
            <WelcomeTo>Welcome to aWatch! 👋</WelcomeTo>
            <DisclaimerContainer>
              <Disclaimer>
                This site does not store any files on our server, we only link
                media hosted on 3rd party services. Any legal issues regarding
                the content on this website should be taken up with the actual
                file hosts themselves, as we're not affiliated with them. We do
                not host or upload any videos, movies, media files (avi, mov,
                flv, mpg, mpeg, divx, dvd rip, mp3, mp4, torrent, ipod, psp).
                aWatch.fun is not responsible for the accuracy, compliance,
                copyright, legality, decency, or any other aspect of the content
                of other linked sites. If you have any legal issues, please
                contact the appropriate media file owners or host sites.
              </Disclaimer>
            </DisclaimerContainer>
          </Welcome>
          <Links>
            <LinkList>
              <li>
                <a href="/about">DMCA</a>
              </li>
            </LinkList>
          </Links>
          <p>© aWatch</p>
        </Content>
      </Container>
      <Backdrop />
    </Main>
  );
}

export default Footer;
