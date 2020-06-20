import React from 'react';
import { Route, Switch } from "react-router-dom";
import MainFeed from "./components/MainFeed"


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainFeed} />
      </Switch>
    </div>
  );
}

export default App;
