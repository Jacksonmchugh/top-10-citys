import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from './About'
import Cities from './pages/Cities'
import CityForm from './pages/CityForm'
import CityDetails from './pages/CitiesDetails'
import CommentDetails from './pages/CommentDetails'
import CommentForm from './pages/CommentForm'
import axios from 'axios'
const App = () => {
  const [cities, setCities] = useState([])
  const [selectedCity, setSelectedCity] = useState({})

  useEffect(() => {
    const getCities = async () => {
      const res = await axios.get(`localhost:3001/cities`)
      setCities(res.data)
      
    }
    getCities()
  }, [])
  const chooseCity = (selected) => {
    setSelectedCity(selected)
    Navigate(`/cities/${selected._id}`)
  }
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Cities" element={<Cities cities={cities} />} />
          <Route path="/Cities/:id" element={<CityDetails />} />
          <Route path="/CityForm" element={<CityForm />} />
          <Route
            path="/Cities/:cityId/comment/:commentId"
            element={<CommentDetails />}
          />
          <Route path="/Cities/:cityId/comment" element={<CommentForm />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
