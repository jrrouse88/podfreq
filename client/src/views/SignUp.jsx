import React, { Component } from 'react'
import axios from 'axios'

class SignUp extends Component {
  state = {
    fields: {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
      avatar: ''
    }
  }

  onFormSubmit(evt) {
    evt.preventDefault()
    console.log(this.state.fields)
  }

  render() {
    return (
      <div className="signUpContainer">
        <h1>Sign Up</h1>
        <form>
          <input type="text" placeholder="First Name" name="firstName"/>
          <input type="text" placeholder="Last Name" name="lastName"/>
          <input type="text" placeholder="Username" name="userName"/>
          <input type="text" placeholder="Email" name="email"/>
          <input type="text" placeholder="Password" name="password"/>
          <input type="text" placeholder="Profile Picture" name="avatar"/>
          <button>Create Account</button>
        </form>
      </div>
    )
  }
}

export default SignUp