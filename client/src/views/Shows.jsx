import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Shows extends Component {
  state = {
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
    console.log(this.state.shows)
    return (
      <div className="tile is-parent">
        {this.state.shows.map(show => {
          return (
            <section key={show._id} className="tile is-child notification">
              <Link to={`/podcasts/${show._id}`} className="level-item"><h2>{show.title}</h2></Link>
              <figure className="image is-4by3">
                <img src={show.art} alt="" className="level-item"/>
              </figure>
              <p className="level-item">Description: {show.description}</p>
            </section>
          )
        })}
      </div>
    )
  }
}

export default Shows