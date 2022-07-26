import './App.css'

import Nav from './components/Nav'
import Home from './components/Home'
import City from './components/Cities'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  // The boatsArray is passed into state as the initial state for 'boats' in App.js
  const [cities, setCities] = useState(citiesArray)
  const [newCity, setNewCity] = useState({
    id: '',
    name: '',
    img: '',
    description: '',
    population: ''
  })

  const addCity = (e) => {
    e.preventDefault()
    const currentCity = cities
    const createdCity = {
      ...newCity,
      id: parseInt(city.length + 1),
      population: parseInt(newCity.population)
    }
    currentCity.push(createdCity)
    setCity(currentCity)
    setNewCity({ id: '', name: '', img: '', description: '', population: '' })
  }

  const handleChange = (e) => {
    setNewCity({ ...newCity, [e.target.name]: e.target.value })
  }

  {
    return (
      <div>
        <header>
          <Nav />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Cities" element={<City />}></Route>
          </Routes>
        </main>
      </div>
    )
  }
}

export default App
