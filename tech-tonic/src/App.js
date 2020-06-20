import React from 'react';
import { Route, Switch } from "react-router-dom";
import SearchBar from "./components/SearchBar"
import MainFeed from "./components/MainFeed"


function App() {
  return (
    <div className="App">
    <SearchBar />
      <Switch>
        <Route exact path="/" component={MainFeed} />
      </Switch>
    </div>
  );
}

export default App;
