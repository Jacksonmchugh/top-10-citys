
import { Link } from 'react-router-dom'



export default function Nav() {
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

