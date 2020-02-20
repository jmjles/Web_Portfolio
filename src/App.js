import React, { Component } from "react";
import Header from "./components/layout/Header";

import { Route, Switch } from "react-router-dom";
import Home from "./components/pages/home";
import Projects from "./components/pages/projects";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
