import React, { Component } from 'react'
import axios from 'axios'
import clientAuth from '../clientAuth'

class MyShows extends Component {
  state = {
    currentUser: clientAuth.getCurrentUser(),
    shows: []
  }

  componentDidMount() {
    axios({method:'get', url: '/podcasts'})
      .then(res => {
        this.setState({shows: res.data})
        //console.log(this.state)
      })
  }

  render() {
    const { currentUser } = this.state
    const { shows } = this.state
    return (
      <div className="userShowsContainer">
        {shows.map(show => {
          return (
            currentUser._id === show.user
            ? 
              <section key={show._id}>
                <p>{show.title}</p>
                <img src={show.art} alt='' />
              </section>
            : 
              null
          )
        })}
      </div>
    )
  }
}

export default MyShows