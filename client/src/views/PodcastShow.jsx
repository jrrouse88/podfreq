import React, { Component } from 'react'
import axios from 'axios'

class PodcastShow extends Component {
  constructor(props) {
    super()
  }

  componentDidMount() {
    axios({method: 'get', url: `${this.props.location.pathname}`})
      .then(res => {
        //console.log(res.data)
        this.setState({
          podcast: res.data.podcast,
          episodes: res.data.episodes
        })
      })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        This is 
      </div>
    )
  }
}

export default PodcastShow