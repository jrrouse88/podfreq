import React, { Component } from 'react'
import axios from 'axios'
import clientAuth from '../clientAuth'
import { Link } from 'react-router-dom'

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

  componentWillReceiveProps() {
    axios({method: 'get', url: '/podcasts'})
    .then(res => {
       //console.log(res.data)
      this.setState({
        shows: res.data
      })
     })
  }

  render() {
    const { currentUser } = this.state
    const { shows } = this.state
    return (
      <div className="userShowsContainer row">
        {shows.map(show => {
          return (
            currentUser._id === show.user
            ? 
              <section className="oneShow" key={show._id}>
                <Link to={`/podcasts/${show._id}`}><p>{show.title}</p></Link>
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