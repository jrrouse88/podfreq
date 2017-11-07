import React, { Component } from 'react'
import axios from 'axios'

class Hosts extends Component {
  state = {
    hosts: []
  }

  componentDidMount() {
    axios({method: 'get', url: '/users'})
      .then(res => {
        this.setState({hosts: res.data})
      })
  }

  render() {
    return (
      <div className="hostsContainer">
        {this.state.hosts.map(host => {
          console.log(host)
          return (
            <section key={host._id}>
              <img src={host.avatar} alt=""/>
              <h2>{host.firstName} {host.lastName}</h2>
            </section>
          )
        })}
      </div>
    )
  }
}

export default Hosts