import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header.js'
import stars from './assets/etc/stars.mp4'

class App extends Component {
  render() {
    return (
      <div className="App container-fluid" id="main">
        <Header/>
        <video autoPlay id="vid" loop muted>
            <source src={stars} type="video/mp4"/>
        </video>
      </div>
    );
  }
}

export default App;
