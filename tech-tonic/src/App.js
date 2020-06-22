import React from 'react';
import { Route, Switch } from "react-router-dom";
import styled from 'styled-components'
import MainFeed from "./components/MainFeed"

import GlobalStyle from './css/GlobalStyle'
import Header from './components/Header'

import geodesyImage from '../src/assets/Geodesy.jpg'


const Grid = styled.div`
  display: grid;
  height: 100%;
  background-color: #000000;
  grid-template-areas:
    "sideStart header sideEnd"
    "sideStart main sideEnd";
  grid-template-rows: 10rem 1fr;
  grid-template-columns: 2fr 4fr 2fr;
`;


const mediaQueries = {
  mobile: (styles) => `
  @media only screen and (max-width: 760px) {
      ${styles}
  }
  `,
}

const SideStart = styled.div`
  grid-area: sideStart;
  height: 100%;
  background-image: url(${geodesyImage});
  background-position: center;
  background-size: 500%;
  background-position: center;
  ${ (props) => props.mobile && mediaQueries[props.mobile](
    `background-image: none`
  ) };
  opacity: 0.3;
`;

const SideEnd = styled.div`
  grid-area: sideEnd;
  height: 100%;
  background-image: url(${geodesyImage});
  background-size: 500%;
  background-position: center;
  ${ (props) => props.mobile && mediaQueries[props.mobile](
    `background-image: none`
  ) };
  opacity: 0.3;
`;

const HeaderWrapper = styled.div`
  grid-area: header;
  position: sticky;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #121212;
`
const Main = styled.main`
  height: 100%;
  grid-area: main;
  display: flex;
  flex-direction: column;
`;


const App = () => {
  return (
    <>
    <GlobalStyle />
    <Grid >
      <SideStart mobile="mobile" />
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Main>
        <MainFeed />
      </Main>
      <SideEnd mobile="mobile" />
    </Grid >
    </>
  );
}

export default App;
