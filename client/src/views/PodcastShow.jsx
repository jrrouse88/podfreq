import React, { Component } from 'react'
import axios from 'axios'

import clientAuth from '../clientAuth'
import AddEpisode from './AddEpisode'

class PodcastShow extends Component {
  constructor(props) {
    //console.log(props)
    super()
    this.state = { 
      podcast: null,
      currentUser: null
    }
  }

  componentDidMount() {
   axios({method: 'get', url: `${this.props.location.pathname}`})
     .then(res => {
        //console.log(res.data)
       this.setState({
         podcast: res.data.podcast,
         episodes: res.data.episodes,
         currentUser: clientAuth.getCurrentUser()
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
    //console.log(podcast.title)
    //console.log(this.state.episodes)
    const { episodes } = this.state
    const { currentUser } = this.state
    let add = null
    if(currentUser) {
      add = <AddEpisode {...this.state} />
    } else {
      add = null
    }
    //console.log(currentUser._id)
    //console.log(podcast.user)
    return (
      <div className="container">
      {add}
        <header className="castHeader">
          <img src={podcast.art} alt="" />
          <h1 className="title is-1">{podcast.title}</h1>
        </header>
        {episodes.map(episode => {
          return (
            <section key={episode._id}>
              <aside className="episodeArt">
                <img src={episode.cover} alt=""/>
              </aside>
              <div className="level">
              <button onClick={() => this.props.onPlayClick({
                  cover: episode.art || episode.cover,
                  name: episode.title || episode.name,
                  musicSrc: episode.src || episode.musicSrc
                })} className="button">▶︎</button>
                <h1 className="level-item">{episode.name || episode.title}</h1>
                <h2 className="level-item">{episode.description}</h2>
              </div>
            </section>
          )
        })}
        {/* <button onClick={() => this.props.onPlayClick({
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
      })}></button> */}
      </div>
    )
  }
}

export default PodcastShow