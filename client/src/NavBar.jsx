import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <div className='navbar is-dark'>
      <Link to="/" className="navbar-brand">PodFreq</Link>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link to="/podcasts">Shows</Link>
          <Link to="/hosts">Hosts</Link>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/logout">Log Out</Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar