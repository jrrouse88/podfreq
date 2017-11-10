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
<<<<<<< HEAD
      <div>
        This is 
        <button onClick={() => this.props.onPlayClick({
          cover:"http://www.lijinke.cn/music/1387583682387727.jpg",
          currentTime:10.211519,
          duration:164.211519,
          musicSrc:"http://www.lijinke.cn/music/201711082.mp3",
          name:"Canon (piano version)",
          volume:100,
          muted:false,
          networkState:1,
          readyState:4,
          paused:false,
          ended:false,
          startDate:null,
          played:{length:1}
      })}></button>
      </div>
=======
      <div></div>
>>>>>>> show-view
    )
  }
}

export default PodcastShow