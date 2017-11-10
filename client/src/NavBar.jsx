import React from 'react'
import { Link } from 'react-router-dom'
import logo from './podfreq.png'

const NavBar = (props) => {
  return (
    <div className='navbar is-primary'>
      <Link to="/" className="navbar-brand"><img src={logo} alt="" /></Link>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link to="/podcasts" className="navbar-item">Shows</Link>
          <Link to="/hosts" className="navbar-item">Hosts</Link>
          <Link to="/login" className="navbar-item">Log In</Link>
          <Link to="/signup" className="navbar-item">Sign Up</Link>
          <Link to="/profile" className="navbar-item">Profile</Link>
          <Link to="/logout" className="navbar-item">Log Out</Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar