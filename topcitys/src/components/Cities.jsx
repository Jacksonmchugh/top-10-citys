import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from "react"



const BASE_URL = 'http://localhost:3001'

const Cities = () => {
  let navigate = useNavigate()

  const [city, setCity] = useState('')

  const showCityDetails = (city) => {
    navigate(`${Cities._id}`)
  }
  
  useEffect(() => {
    const getCities = async() => {
      console.log('get cities')
      let res = await axios.get(`${BASE_URL}/cities`)
        console.log(res.data)
        setCity(res.data)
      }
    getCities()
}, [])

  return (
    <div className="cities-grid">
      { city ? 
        city.map((citys) => (
          <div className="city-card" onClick={() => showCityDetails(citys)} key={citys._id}>
            <img style={{ display: 'block' }} src={citys.image} alt={citys.name}/>
            <h1>{citys.name}</h1>
          </div>
        ))
       : '' }
       <Link to='/'>Back</Link>
    </div>
  )
}

export default Cities