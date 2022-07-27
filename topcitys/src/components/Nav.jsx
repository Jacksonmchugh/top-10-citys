import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Nav.css'


function Nav() {
  return (
    <nav className="navbar">
      <div>
        <Link to ="/">Home </Link>
        <Link to="/Cities">Cities </Link>
        <Link to='/About'>About </Link>
        
      </div>
    </nav>
  )
}

export default Nav