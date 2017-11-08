import React, { Component } from 'react'
import clientAuth from '../clientAuth.js'

class Profile extends Component {
  state = { currentUser: null }

  componentDidMount() {
    this.setState({
      currentUser: clientAuth.getCurrentUser()
    })
  }

  render() {
    return (
      <div className="profileContainer">
        This is my profile.
      </div>
    )
  }
}

export default Profile