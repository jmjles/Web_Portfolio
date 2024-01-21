import React, { Component } from "react";
import Header from "./components/layout/Header";
import Home from "./components/pages/home";
import Projects from "./components/pages/projects";
import About from "./components/pages/about";
import Certificates from "./components/pages/certificates";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Projects />
        <About />
        <Certificates />
      </div>
    );
  }
}

export default App;
