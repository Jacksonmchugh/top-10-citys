const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const db = require('./db')
const { City } = require('./models')
const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.get('/', (req, res) => {
  res.send('Home page')
})
app.get('/citys', async (req, res) => {
  const citys = await City.find({})
  console.log('found citys')
  res.json(citys)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
