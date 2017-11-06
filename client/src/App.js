import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import NavBar from './NavBar.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
