import React from 'react';
import { Route, Switch } from "react-router-dom";
import styled from 'styled-components'
import MainFeed from "./components/MainFeed"

import GlobalStyle from './css/GlobalStyle'
import Header from './components/Header'

import geodesyImage from '../src/assets/Geodesy.jpg'


const Grid = styled.div`
  display: grid;
  background-color: #121212;
  padding: 1rem;
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
  background-image: url(${geodesyImage});
  background-position: center;
  background-size: 400%;
  background-position: center;
  opacity: 0.6;
  ${ (props) => props.mobile && mediaQueries[props.mobile](
    `background-image: none`
  ) }
`;
const SideEnd = styled.div`
  grid-area: sideEnd;
  background-image: url(${geodesyImage});
  background-size: 400%;
  background-position: center;
  opacity: 0.6;
  ${ (props) => props.mobile && mediaQueries[props.mobile](
    `background-image: none`
  ) }
`;

const HeaderWrapper = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  top: 0;
  grid-area: header;
  background-color: #121212;
`
const Main = styled.main`
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
`;


const App = () => {
  return (
    <>
    <GlobalStyle />
    <Grid >
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <SideStart mobile="mobile" />
      <Main>
        <Switch>
          <Route exact path="/" component={MainFeed} />
        </Switch>
      </Main>
      <SideEnd mobile="mobile" />
    </Grid >
    </>
  );
}

export default App;
