import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <div>
        <img className="homeBackground" src="https://i.imgur.com/RNvR5rg.jpg" 
        alt='background'
        />
      </div>
      <div>
        <h1>Top Cities in the U.S.A</h1>
        <h2>The top 10 cities in the U.S. ranked by population. Check out the cities to see a little about them.</h2>
      </div>
    </div>
  )
}

export default Home