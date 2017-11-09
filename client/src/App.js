import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import clientAuth from './clientAuth'
import './App.css'

import NavBar from './NavBar.jsx'
import LogIn from './views/LogIn'
import Shows from './views/Shows'
import Hosts from './views/Hosts'
import SignUp from './views/SignUp'
import Profile from './views/Profile'
import PodcastShow from './views/PodcastShow'
import MediaPlayer from './MediaPlayer'

class App extends Component {
  state = { 
    currentUser: null,
    playlist: [],
  }

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

  setPlaylist(data) {
    this.setState({
      playlist: [
        data
      ]
    })
  }

  render() {
    const { currentUser } = this.state
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/login" render={(props) => {
              return <LogIn {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
            }} />
          <Route path="/podcasts/:castId" render={() => {
            return <PodcastShow onPlayClick={this.setPlaylist.bind(this)} />
          }} />
          <Route path="/podcasts" component={Shows}/>
          <Route path="/hosts" component={Hosts} />
          <Route path="/signup" component={SignUp} />
          <Route path="/profile" render={() => {
            return currentUser
            ? <Profile />
            : <Redirect to="/login" />
          }} />
        </Switch>

        {this.state.playlist.length
          ? <MediaPlayer playlist={this.state.playlist} />
          : null
        }
        
      </div>
    );
  }
}

export default App;
