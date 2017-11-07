import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <div className='navbar'>
      <Link to="/">Home</Link>
      <Link to="/podcasts">Shows</Link>
      <Link to="/hosts">Hosts</Link>
    </div>
  )
}

export default NavBar