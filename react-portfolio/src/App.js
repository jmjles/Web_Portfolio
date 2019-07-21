import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header.js';
import stars from './assets/etc/stars.mp4';

class App extends Component {
  render() {
    return (
      <div className="App" id="main">
        <Header/>
        <article>
          <video autoPlay id="vid" loop muted>
              <source src={stars} type="video/mp4"/>
          </video>
        </article>
      </div>
    );
  }
}

export default App;
