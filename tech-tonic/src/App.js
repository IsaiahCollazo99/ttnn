import React from 'react';
import { Route, Switch } from "react-router-dom";
import styled from 'styled-components'
import MainFeed from "./components/MainFeed"

import GlobalStyle from './css/GlobalStyle'
import Header from './components/Header'

const Grid = styled.div`
  display: grid;
  background-color: #121212;
  padding: 1rem;
  grid-template-areas:
    "sideHeaderStart header sideHeaderEnd"
    "sideStart main sideEnd";
  grid-template-rows: 10rem 1fr;
  grid-template-columns: 2fr 4fr 2fr;
`;

const SideStart = styled.div`
  grid-area: sideStart;
`;
const SideEnd = styled.div`
  grid-area: sideEnd;
`;

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  grid-area: header;
  background-color: 121212;
`

const Main = styled.main`
  grid-area: main;
  display: flex;
  flex-direction: column;
`;


const App = () => {
  return (
    <>
    <GlobalStyle />
    <Grid >
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <SideStart />
      <Main>
        <Switch>
          <Route exact path="/" component={MainFeed} />
        </Switch>
      </Main>
      <SideEnd />
    </Grid >
    </>
  );
}

export default App;
