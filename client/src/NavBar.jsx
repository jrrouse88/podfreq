import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <div className='navbar'>
      <Link to="/">Home</Link>
      <Link to="/podcasts">Shows</Link>
      <Link to="/hosts">Hosts</Link>
      <Link to="/logIn">Log In</Link>
      <Link to="/signUp">Sign Up</Link>
    </div>
  )
}

export default NavBar