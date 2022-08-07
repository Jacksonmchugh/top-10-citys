
import { Link, NavLink } from 'react-router-dom'



export default function Nav() {
  return (
    <nav className="flex-row">
      <div>
        <NavLink to ="/" className={({ isActive})=>
      isActive ? "active" : undefined}>Home</NavLink>
        <NavLink to='/About' className={({ isActive})=>
      isActive ? "active" : undefined}>About </NavLink>
        <NavLink to="/Cities" className={({ isActive})=>
      isActive ? "active" : undefined}>Cities </NavLink>
      <NavLink to="/comments" className={({ isActive})=>
      isActive ? "active" : undefined}>Comments </NavLink>
        <NavLink to='/CityForm' className={({ isActive})=>
      isActive ? "active" : undefined}>City Form</NavLink>
       <NavLink to='/CommentForm' className={({ isActive})=>
      isActive ? "active" : undefined}>Comment Form</NavLink>
        
      </div>
    </nav>
  )
}

