import React, { Component } from 'react'
import axios from 'axios'

class PodcastShow extends Component {
  componentDidMount() {
  }

  render() {
    return (
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
    )
  }
}

export default PodcastShow