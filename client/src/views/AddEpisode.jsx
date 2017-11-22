import React, { Component } from 'react'
import axios from 'axios'

class AddEpisode extends Component {
  state = {
    fields: {
      name: '',
      description: '',
      cover: '',
      musicSrc: ''
    }
  }
  onInputChange(evt) {
    // console.log(evt.target)
    this.setState({
      fields: {
        ...this.state.fields,
        [evt.target.name]: evt.target.value
      }
    })
  }
  
  onFormSubmit(evt) {
    evt.preventDefault()
    axios({method: 'post', url:`/podcasts/${this.props.podcast._id}/episodes`, data: this.state.fields})
      .then(res => {
        this.props.history.push(`/podcasts/${this.props.podcast._id}`)
      })
  }
  
  render() {
    return(
        <div>
          <h2>Add An Episode</h2>
          <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
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