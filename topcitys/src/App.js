import './App.css'

import Nav from './components/Nav'
import Home from './components/Home'
import City from './components/Cities'
import { Routes, Route } from 'react-router-dom'

function App() {
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

export default App
