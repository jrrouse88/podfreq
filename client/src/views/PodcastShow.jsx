import React, { Component } from 'react'
import axios from 'axios'

class PodcastShow extends Component {
  componentDidMount() {
    axios({method: 'get', url: `/podcasts/${}`})
  }

  render() {
    return (
      <div>
        This is 
      </div>
    )
  }
}

export default PodcastShow