const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const db = require('./db')
const { City } = require('./models')
const { Comment } = require('./models')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('this is the home page')
})
app.get('/cities', async (req, res) => {
  const cities = await City.find({})
  console.log(cities)
  res.json(cities)
})
app.get('/comments', async (req, res) => {
  const comments = await Comment.find({})
  console.log(comments)
  res.json(comments)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
