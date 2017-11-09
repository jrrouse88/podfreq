import React, { Component } from 'react'
import axios from 'axios'

//import ShowComponent from './ShowComponent.jsx'

class PodcastShow extends Component {
  constructor(props) {
    super()
    this.state = { podcast: null }
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
    if(!podcast) {
      return (
        <div>Loading</div>
      )
    }


    console.log(podcast.title)


    //console.log(this.state.episodes)
    const { episodes } = this.state
    console.log(episodes)
    return (
      <div></div>
    )
  }
}

export default PodcastShow