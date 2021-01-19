import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';

import Toolbar from "./components/Toolbar"
import Routes from "./Routes"
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="app-container">
        <BrowserRouter>
          <Toolbar />
          <Routes />
        </BrowserRouter>
      </div>
    )
  }
}

export default App
