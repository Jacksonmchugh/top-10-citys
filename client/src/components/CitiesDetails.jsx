import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import LikeTotal from '../LikeTotal'
import Likes from '../Likes'
const CityDetails = (props) => {
  const location = useLocation()
  const [city, setCity] = useState('')
  console.log(city)

  // let { id }= useParams()
  // function LikeTotal({ totalLikes }) {
  //   return <p>{totalLikes}</p>;
  //   }
  //   function Likes(props) {
  //     const [totalLikes, setTotalLikes] = useState(0);
  //     function incrementLikes() {
  //       setTotalLikes(totalLikes + 1);
  //     }
  //     function decrementLikes() {
  //       if (totalLikes) setTotalLikes(totalLikes - 1);
  //     }
  //     return (
  //       <>
  //         <LikeTotal totalLikes={totalLikes} />
  //         <button className="increment" onClick={incrementLikes}>
  //           Like
  //         </button>
          
  //       </>
  //     );
  //   }
  // useEffect(() => {
  //   let selectedCity = props.cities.find(
  //     (city) => city.id === parseInt(id)
  //   )
  //   setCity(selectedCity)
  //   console.log(selectedCity)
  // }, [props.city, id])
  // console.log(location)

  return setCity ? (
    <div className="detail">
      <div className="detail-header">
      
        <img src={city.image} alt={city.name} />
        <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h1>{city.name}</h1>
        </div> 
        <Link to="/cities">Back</Link>
      <Link to='/'>Home</Link>
      </div>
      <div className="info-wrapper">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h3>Population: {city.population}</h3>
          <h3>Visits per year: {city.visits}</h3>
        </div>
        <p>{city.description}</p>
        {/* <LikeTotal  /> */}
        <button>Like</button>
          
        
      </div>
      
    </div>
    
  ) : null;
}

export default CityDetails
