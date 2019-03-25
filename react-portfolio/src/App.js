import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header.js'

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header/>
      </div>
    );
  }
}

export default App;
