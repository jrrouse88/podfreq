import React, { Component } from 'react'
import axios from 'axios'

class AddEpisode extends Component {
  
  render() {
    return(
        <div>
          <h2>Add An Episode</h2>
          <form>
            <input type="text" name="name" placeholder="Episode Title..."/>
            <input type="text" name="description" placeholder="Episode Description..."/>
            <input type="text" name="cover" placeholder="Cover Art..."/>
            <input type="text" name="musicSrc" placeholder="File Source..."/>
            <button>Add Episode</button>
          </form>
        </div>
    )
  }
}

export default AddEpisode