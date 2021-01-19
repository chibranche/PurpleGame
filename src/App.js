import React, { Component } from 'react'
import Toolbar from "./components/Toolbar"
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Toolbar/>
        This is The Purple main component
      </div>
    )
  }
}

export default App
