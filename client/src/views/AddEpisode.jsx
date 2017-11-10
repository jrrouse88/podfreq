import React, { Component } from 'react'
import axios from 'axios'

import clientAuth from '../clientAuth'

class AddEpisode extends Component {
  state = {
      currentUser: clientAuth.getCurrentUser()
  }
  
  render() {
    return(
      <div>
        <h1>Add Episode</h1>
      </div>
    )
  }
}

export default AddEpisode