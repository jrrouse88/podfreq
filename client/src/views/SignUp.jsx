import React, { Component } from 'react'
import axios from 'axios'

class SignUp extends Component {
  state = {
    fields: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      avatar: ''
    }
  }
  
  onFormSubmit(evt) {
    evt.preventDefault()
    axios({method: 'post', url:'/users', data: this.state.fields})
      .then(res => {
        //console.log(this.state.fields)
        //console.log(res.data)
        this.props.history.push('/hosts')
      })
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

  render() {
    return (
      <div className="signUpContainer">
        <h1>Sign Up</h1>
        <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
          <input type="text" placeholder="First Name" name="firstName"/>
          <input type="text" placeholder="Last Name" name="lastName"/>
          <input type="text" placeholder="Email" name="email"/>
          <input type="password" placeholder="Password" name="password"/>
          <input type="text" placeholder="Profile Picture" name="avatar"/>
          <button>Create Account</button>
        </form>
      </div>
    )
  }
}

export default SignUp