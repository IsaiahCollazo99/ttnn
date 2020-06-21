import React from 'react';
import { Route, Switch } from "react-router-dom";
import styled from 'styled-components'
import MainFeed from "./components/MainFeed"


import GlobalStyle from './css/GlobalStyle'

const Grid = styled.div`
  background-color: #121212;

  display: flex;
  flex-direction: row;
  padding: 2%;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${ (props) => props.size ? props.size : 'auto' } 
`

const App = () => {
  return (
    <>
    <GlobalStyle />
    <Grid >
      <Column size="25%" />
      <Column size="50%" primary >
        <Switch>
          <Route exact path="/" component={MainFeed} />
        </Switch>
      </Column >
      <Column size="25%"/>
    </Grid >
    </>
  );
}

export default App;
