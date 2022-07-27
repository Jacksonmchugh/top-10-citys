// // import './App.css'
// import { useState } from 'react'
// import Nav from './components/Nav'
// import Home from './components/Home'
// import City from './components/Cities'
// import { Routes, Route } from 'react-router-dom'
// import CityDetails from './components/CitiesDetails'
// import CityForm from './components/CityForm'
// import Cities from './components/Cities'

// const App = () => {

//   //   const [cities, setCities] = useState(citiesArray)
//   //   const [newCity, setNewCity] = useState({
//   //     id: '',
//   //     name: '',
//   //     img: '',
//   //     description: '',
//   //     population: ''
//   //   })

//   //   const addCity = (e) => {
//   //     e.preventDefault()
//   //     const currentCity = cities
//   //     const createdCity = {
//   //       ...newCity,
//   //       id: parseInt(city.length + 1),
//   //       population: parseInt(newCity.population)
//   //     }
//   //     currentCity.push(createdCity)
//   //     setCity(currentCity)
//   //     setNewCity({ id: '', name: '', img: '', description: '', population: '' })
//   //   }

//   //   const handleChange = (e) => {
//   //     setNewCity({ ...newCity, [e.target.name]: e.target.value })
//   //   }

//   {
//     return (
//       <div>
//         <header>{/* <Nav /> */}</header>
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/Cities" element={<Cities />} />
//             {/* <Route
//               path="/Cities/:id"
//               element={<CityDetails cities={cities} />}
//             />
//             <Route
//               path="new"
//               element={
//                 <CityForm
//                   newCity={newCity}
//                   handleChange={handleChange}
//                   addCity={addCity}
//                 /> */}
//             {/* } */}
//             {/* /> */}
//           </Routes>
//         </main>
//       </div>
//     )
//   }
// }

// export default App
import './styles/App.css'
import { useState } from 'react'

import Home from './components/Home'

const App = () => {
  return (
    <div className="App">
      <h1>Home</h1>
      <Home />
    </div>
  )
}

export default App
