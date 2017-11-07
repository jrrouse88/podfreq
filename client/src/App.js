import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import NavBar from './NavBar.jsx'
import Shows from './views/Shows'
import Hosts from './views/Hosts'
import SignUp from './views/SignUp'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route path="/podcasts" component={Shows}/>
        <Route path="/hosts" component={Hosts} />
        <Route path="/signup" component={SignUp} />
      </div>
    );
  }
}

export default App;
