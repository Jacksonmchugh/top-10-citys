const db = require('../db')
const { City } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const citys = [
    {
      name: 'New York City',
      state: 'New York',
      image: 'https://i.imgur.com/pqiXX8h.jpg',
      visits: 65200000,
      population: 8800000,
      description:
        'Prominent Tourist Attractions: Statue of Libert. Empire State Building. Central Park. Nicknames: The Big Apple. The City that Never Sleeps. The Melting Pot.',
      likes: 0
    },
    {
      name: 'Los Angeles',
      state: 'California',
      image: 'https://i.imgur.com/Fr7FFMZ.jpg',
      visits: 50000000,
      population: 3900000,
      description:
        'Nicknames: L.A., La-La Land, City of Angels. Prominent Tourist Attractions: Hollywood, Griffith Observatory, Sunset Boulevard ',
      likes: 0
    },
    {
      name: 'Chicago',
      state: 'Illinois',
      image: 'https://i.imgur.com/FlVVInt.jpg',
      visits: 57600000,
      population: 2700000,
      description:
        'Nicknames: The Windy City, City of Big Shoulders, The Second City. Prominent Tourist Attractions: Millennium Park, Willis Tower, Navy Pier ',
      likes: 0
    },
    {
      name: 'Houston',
      state: 'Texas',
      image: 'https://i.imgur.com/OIbGh0L.jpg',
      visits: 22300000,
      population: 2300000,
      description:
        'Nicknames: Space City, H-Town, The Big Heart. Prominent Tourist Attractions: Space Center, Hermann Park, Houston Zoo',
      likes: 0
    },
    {
      name: 'Phoenix',
      state: 'Arizona',
      image: 'https://i.imgur.com/w1lh2Y7.jpg',
      visits: 22000000,
      population: 1610000,
      description:
        'Nicknames: Valley of the Sun, The Valley. Prominent Tourist Attractions: Desert Botanical Garden, Papago Park, South Mountain Park and Preserve ',
      likes: 0
    },
    {
      name: 'Philadelphia',
      state: 'Pennsylvania',
      image: 'https://i.imgur.com/ujwYLca.jpg',
      visits: 43300000,
      population: 1600000,
      description:
        'Nicknames: The City of Brotherly Love, The Birthplace of America, The Quaker City. Prominent Tourist Attractions: Liberty Bell, Independence Hall, Philadelphia Museum of Art',
      likes: 0
    },
    {
      name: 'San Antonio',
      state: 'Texas',
      image: 'https://i.imgur.com/MdnfTJD.jpg',
      visits: 37000000,
      population: 1430000,
      description:
        'Nicknames: Alamo City, Countdown City, River City. Prominent Tourist Attractions: The Alamo, San Antonio River Walk, San Antonio Missions National Historical Park ',
      likes: 0
    },
    {
      name: 'San Diego',
      state: 'California',
      image: 'https://i.imgur.com/9x3WwDC.jpg',
      visits: 35800000,
      population: 1400000,
      description:
        'Nicknames: Americas Finest City, City in Motion, Silicon Beach. Prominent Tourist Attractions: Balboa Park, San Diego Zoo, USS Midway Museum ',
      likes: 0
    },
    {
      name: 'Dallas',
      state: 'Texas',
      image: 'https://i.imgur.com/jAMKyN2.jpg',
      visits: 49000000,
      population: 1300000,
      description:
        'Nicknames: City of Hate, D-Town, The Metroplex. Prominent Tourist Attractions: The Dallas Arboretum and Botanical Garden, Klyde Warren Park, The Dallas World Aquarium',
      likes: 0
    },
    {
      name: 'San Jose',
      state: 'California',
      image: 'https://i.imgur.com/wVEPBEB.png',
      visits: 42700000,
      population: 1000000,
      description:
        'Nicknames: The Capital of Silicon Valley, San Jo. Prominent Tourist Attractions: San José Museum of Art, Californias Great America, Computer History Museum',
      likes: 0
    }
  ]

  await City.insertMany(citys)
  console.log('Created citys!')
}
const run = async () => {
  await main()
  db.close()
}

run()
