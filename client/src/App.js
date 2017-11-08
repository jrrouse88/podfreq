import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import clientAuth from './clientAuth'

import NavBar from './NavBar.jsx'
import LogIn from './views/LogIn'
import Shows from './views/Shows'
import Hosts from './views/Hosts'
import SignUp from './views/SignUp'

class App extends Component {
  state = { currentUser: null }

  componentDidMount() {
    this.setState({
      currentUser: clientAuth.getCurrentUser()
    })
  }

  onLoginSuccess(user) {
    this.setState({
      currentUser: clientAuth.getCurrentUser()
    })
  }

  logOut() {
    clientAuth.logOut()
		this.setState({ currentUser: null })
  }

  render() {
    const { currentUser } = this.state
    return (
      <div className="App">
        <NavBar />
        <Route path="/login" render={(props) => {
						return <LogIn {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
					}} />
        <Route path="/podcasts" component={Shows}/>
        <Route path="/hosts" component={Hosts} />
        <Route path="/signup" component={SignUp} />
      </div>
    );
  }
}

export default App;
