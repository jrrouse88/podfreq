import React, { Component } from 'react'
import axios from 'axios'

class PodcastShow extends Component {
  constructor(props) {
    super()
    this.state = {}
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
    //console.log(this.state.podcast)
    const { podcast } = this.state
    //console.log(this.state.episodes)
    const { episodes } = this.state
    return (
      <div className="show-container">
        <div>
        </div>
      </div>
    )
  }
}

export default PodcastShow