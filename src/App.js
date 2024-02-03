import React from "react";
import Header from "./components/layout/Header";
import Home from "./components/pages/home";
import Projects from "./components/pages/projects";
import About from "./components/pages/about";
import Certificates from "./components/pages/certificates";
import ReactGa from "react-ga4";

const App = () => {
  ReactGa.send({ hitType: "pageView", page: "/", title: "Homepage" });
  return (
    <div className="App">
      <Header />
      <Home />
      <Projects />
      <About />
      <Certificates />
    </div>
  );
};

export default App;
