import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import LikeTotal from '../LikeTotal'
import Likes from '../Likes'
import axios from 'axios'

const CityDetails = (props) => {
  
  const [city, setCity] = useState('')
  

  let { id }= useParams()
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
  useEffect(() => {
    
    const selectedCity = async()=>{
      try {
        let res = await axios.get(`http://localhost:3001/cities/${id}`)
        console.log(res.data)
        setCity(res.data)
      } catch(eer){
        console.log(eer)
      }
    }
    setCity(selectedCity)
  },[])

  return city ? (
    <div className="detail">
      <div className="detail-header">
      
        <img src={city.image} alt={city.image} />
        <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h1>{city.name}</h1>
        </div> 
        
      <Link to='/'>Home</Link>
      </div>
      <div className="info-wrapper">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h3>Population: {city.population}</h3>
          <h3>Visits per year: {city.visits}</h3>
        </div>
        <p>{city.description}</p>
        {/* <LikeTotal totalLikes={totalLikes} />
          <button className="increment" onClick={incrementLikes}>
             Like
           </button> */}
          
        <Link to="/cities">Back</Link>
        
      </div>
      
    </div>
    
  ) : null;
}

export default CityDetails
