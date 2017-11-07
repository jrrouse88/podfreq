import React from 'react'
import axios from 'axios'

class Shows extends React.Component {
  state = {
    shows: []
  }

  componentDidMount() {
    axios({method:'get', url: '/podcasts'})
      .then(res => {
        this.setState({shows: res.data})
        //console.log(this.state)
      })
  }
  
  render() {
    console.log(this.state.shows)
    return (
      <div className="showContainer">
        {this.state.shows.map(show => {
          return (
            <section key={show._id}>
              <h2>{show.title}</h2>
              <p>{show.description}</p>
            </section>
          )
        })}
      </div>
    )
  }
}

export default Shows