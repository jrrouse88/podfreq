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
      <div className="container is-flex-desktop">
        {this.state.hosts.map(host => {
          //console.log(host)
          return (
            <section key={host._id} className="hosts">
              <div className="">
                <figure className="">
                  <img src={host.avatar} alt=""/>
                </figure>
              </div>
              <div className="">
                <h2>{host.firstName} {host.lastName}</h2>
              </div>
            </section>
          )
        })}
      </div>
    )
  }
}

export default Hosts