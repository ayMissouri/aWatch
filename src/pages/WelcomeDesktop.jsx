import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  width: 100%;
  height: 70vh;
`;

const Container = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
`;

const RequirementHeading = styled.h1`
  font-size: 2rem;
  line-height: 1;
  font-weight: 700;
  text-align: center;
`;

const RequirementHeading2 = styled.h1`
  font-size: 1rem;
  line-height: 1;
  font-weight: 700;
  text-align: center;
`;

const Highlight = styled.span`
  color: #c00a44;
`;

const Button = styled.a`
  margin-top: 40px;
  background-color: #c00a44;
  font-size: 1.25rem;
  font-weight: 700;
  padding: 15px;
  cursor: pointer;
  border-radius: 10px;
  text-decoration: none;
  &:hover {
    border: white solid 2px;
  }
`;

const WelcomeDesktop = () => {
  return (
    <Main>
      <Container>
        <RequirementHeading>Welcome to</RequirementHeading>
        <img src="/awatch.png" width="60%" alt="aWatch" />
        <RequirementHeading2>
          This app is currently in <Highlight>BETA</Highlight> so there may be a
          few bugs
        </RequirementHeading2>
        <Button href="https://www.awatch.fun">Continue to APP</Button>
      </Container>
    </Main>
  );
};

export default WelcomeDesktop;
