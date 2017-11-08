import React, { Component } from 'react'
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
      <div className="showContainer">
        {this.state.shows.map(show => {
          return (
            <section key={show._id}>
              <h2>{show.title}</h2>
              <img src={show.art} alt=""/>
              <p>Description: {show.description}</p>
            </section>
          )
        })}
      </div>
    )
  }
}

export default Shows