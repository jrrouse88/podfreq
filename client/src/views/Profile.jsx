import React, { Component } from 'react'
import clientAuth from '../clientAuth.js'

class Profile extends Component {
  state = { 
    currentUser: clientAuth.getCurrentUser() 
  }

  render() {
    console.log(this.state.currentUser)
    return (
      <div className="profileContainer">
        <img src={this.state.currentUser.avatar} alt="" />
        <div className="addPodcast">
          <form>
            <h1>Add A Show</h1>
            <input type="text" placeholder="Title" name="title" />
            <input type="text" placeholder="Description" name="description" />
            <input type="text" placeholder="Category" name="category" />
            <input type="text" placeholder="Cover Art" name="art" />
            <button>Create Show</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Profile