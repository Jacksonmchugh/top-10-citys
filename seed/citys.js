const db = require('../db')
const { City } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const citys = [
    {
      name: 'New York City',
      state: 'New York',
      image: 'https://i.imgur.com/pqiXX8h.jpg'
    },
    {
      name: 'Los Angeles',
      state: 'California',
      image: 'https://i.imgur.com/Fr7FFMZ.jpg'
    },
    {
      name: 'Chicago',
      state: 'Illinois',
      image: 'https://i.imgur.com/FlVVInt.jpg'
    },
    {
      name: 'Houston',
      state: 'Texas',
      image: 'https://i.imgur.com/OIbGh0L.jpg'
    },
    {
      name: 'Phoenix',
      state: 'Arizona',
      image: 'https://i.imgur.com/w1lh2Y7.jpg'
    },
    {
      name: 'Philadelphia',
      state: 'Pennsylvania',
      image: 'https://i.imgur.com/ujwYLca.jpg'
    },
    {
      name: 'San Antonio',
      state: 'Texas',
      image: 'https://i.imgur.com/MdnfTJD.jpg'
    },
    {
      name: 'San Diego',
      state: 'California',
      image: 'https://i.imgur.com/9x3WwDC.jpg'
    },
    {
      name: 'Dallas',
      state: 'Texas',
      image: 'https://i.imgur.com/jAMKyN2.jpg'
    },
    {
      name: 'San Jose',
      state: 'California',
      image: 'https://i.imgur.com/wVEPBEB.png'
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
