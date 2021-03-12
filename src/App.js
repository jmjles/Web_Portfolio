import React, { Component } from "react";
import Header from "./components/layout/Header";
import Home from "./components/pages/home";
import Projects from "./components/pages/projects";
import About from "./components/pages/about";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Projects />
        <About />
      </div>
    );
  }
}

export default App;
