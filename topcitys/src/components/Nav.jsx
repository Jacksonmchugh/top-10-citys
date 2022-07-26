import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'


function Nav() {
  return (
    <nav className="navbar">
      <div>
        <Link to ="/">Home </Link>
        <Link to="/City">Cities </Link>
        <Link to='/About'>About </Link>
        
      </div>
    </nav>
  )
}

export default Nav