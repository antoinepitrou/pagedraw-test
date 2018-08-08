import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppRender from './pagedraw/artboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRender />
      </div>
    );
  }
}

export default App;
