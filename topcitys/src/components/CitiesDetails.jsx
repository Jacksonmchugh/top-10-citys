import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const CityDetails = (props) => {
  
  const [city, setCity] = useState('')

  let { id }= useParams()
  
  useEffect(() => {
    let selectedCity = props.cities.find(
      (city) => city.id === parseInt(id)
    )
    setCity(selectedCity)
    
  }, [props.city, id])

  return boat ? (
    <div className="detail">
      <div className="detail-header">
        <img src={city.image} alt={city.name} />
        <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h1>{city.name}</h1>
        </div> 
        
      </div>
      <div className="info-wrapper">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h3>Population: ${city.population}</h3>
          <h3>City ID: {city.id}</h3>
        </div>
        <p>{city.description}</p>
      </div>
      <Link to="/cities">Back</Link>
    </div>
    
  ) : null;
}

export default CityDetails
