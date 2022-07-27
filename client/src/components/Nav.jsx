
import { Link } from 'react-router-dom'



export default function Nav() {
  return (
    <nav className="navbar">
      <div>
        <Link to ="/">Home </Link>
        <Link to='/About'>About </Link>
        <Link to="/Cities">Cities </Link>
        
        <Link to='/Form'>City Form</Link>
        
      </div>
    </nav>
  )
}

