import React from 'react';
import styled from "styled-components";
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import GlobalStyle from "./styles/global";

const Title = styled.h1`
  color: red;
  font-size: 10vh;
  /* background-color: chartreuse; */
`
const MainAppWrapper = styled.section`
  width: 100vw;
  margin: 0 auto;
`;



function App() {
  return (
    <MainAppWrapper>
      <GlobalStyle />
      <Title>My Styled Title</Title>
      <NavBar />
      <Footer />
    </MainAppWrapper>
  );
}

export default App;
