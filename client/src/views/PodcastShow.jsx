import React, { Component } from 'react'
import axios from 'axios'

class PodcastShow extends Component {
  constructor(props) {
    super()
  }
  
  componentDidMount() {
    axios({method: 'get', url: `${this.props.location.pathname}`})
      .then(res => {console.log(res.data)})
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