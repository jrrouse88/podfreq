import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import NavBar from './NavBar.jsx'
import Shows from './views/Shows'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route path="/podcasts" component={Shows}/>
      </div>
    );
  }
}

export default App;
