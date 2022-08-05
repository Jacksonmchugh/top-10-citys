import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function UpdateCity() {
  const initialState = {
    name: '',
    state: '',
    image: '',
    visits: '',
    population: '',
    description: ''
  }
  const [city, setCity] = useState({})

  const [formState, setFormState] = useState(initialState)
  useEffect(() => {
    const getCity = async () => {
      try {
        let res = await axios.get(`http://localhost:3001/updatecity`)
        console.log(res.data)
        setCity(res.data)
      } catch (eer) {
        console.log(eer)
      }
    }
    getCity()
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)
    let res = await axios.post('http://localhost:3001/updatecity', formState)
    console.log(res)
    setFormState(initialState)
  }
  return (
    <div className="form">
      <h1>Update City</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          value={city.name}
          onChange={handleChange}
          name={'name'}
          placeholder={'name'}
        />
        <input
          type="text"
          id="state"
          value={city.state}
          onChange={handleChange}
          name={'state'}
          placeholder={'state'}
        />
        <input
          type="text"
          id="image"
          value={city.image}
          onChange={handleChange}
          name={'image'}
          placeholder={'image'}
        />
        <input
          type="text-area"
          id="description"
          value={city.description}
          onChange={handleChange}
          name={'description'}
          placeholder={'description'}
        />
        <input
          type="text"
          id="population"
          value={city.population}
          onChange={handleChange}
          name={'population'}
          placeholder={'population'}
        />
        <input
          type="text"
          id="visits"
          value={city.visits}
          onChange={handleChange}
          name={'visits'}
          placeholder={'visits'}
        />

        <button type="submit">Submit</button>
      </form>

      <Link to="/cities">Cities</Link>
      <Link to="/">Home</Link>
    </div>
  )
}
export default UpdateCity
