import { useNavigate, Link } from "react-router-dom"
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from "react"
import { useLocation } from "react-router-dom"


const BASE_URL = 'http://localhost:3001'

const Cities = (props) => {
  let navigate = useNavigate()
  

  const [city, setCity] = useState('')

  const showCities = (city) => {
    console.log(city._id)
    navigate(`/Cities/${city._id}`,{state:{city}})
  }
  
  
  useEffect(() => {
    const getCities = async() => {
      console.log('get cities')
      let res = await axios.get(`${BASE_URL}/cities`)
        console.log(res.data)
        setCity(res.data)
      }
    getCities()
}, [props.city])

  return (
    <div className="cities-grid">
      <Link to='/'>Back</Link>
      { city ? 
        city.map((citys) => (
          <div className="city-card" onClick={() => showCities(citys)} key={citys._id}>
            <img style={{ display: 'block' }} src={citys.image} alt={citys.name}/>
            <h1>{citys.name}</h1>
          </div>
        ))
       : '' }
       
    </div>
  )
}

export default Cities