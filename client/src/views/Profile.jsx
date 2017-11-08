import React, { Component } from 'react'
import clientAuth from '../clientAuth.js'
import axios from 'axios'

class Profile extends Component {
  state = { 
    currentUser: clientAuth.getCurrentUser(),
    fields: {
      title: '',
      description: '',
      category: '',
      art: ''
    }
  }

  onInputChange(evt) {
    // console.log(evt.target)
    this.setState({
      fields: {
        ...this.state.fields,
        [evt.target.name]: evt.target.value
      }
    })
  }

  onFormSubmit(evt) {
    evt.preventDefault()
    axios({method: 'post', url:`/users/${this.state.currentUser._id}/podcasts`, data: this.state.fields})
      .then(res => {
        //console.log(this.state.fields)
        console.log(res.data)
        //this.props.history.push('/profile')
      })
  }

  render() {
    //console.log(this.state.currentUser)
    return (
      <div className="profileContainer">
        <img src={this.state.currentUser.avatar} alt="" />
        <div className="addPodcast">
          <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
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