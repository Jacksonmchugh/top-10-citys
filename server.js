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
app.get('/cities/:id', async (req, res) => {
  const comments = await Comment.find({})
  console.log(comments)
  res.json(comments)
})

app.get('/cities/:id', async (req, res) => {
  let { id } = req.params
  const citydetails = await City.findById(id)
  console.log(citydetails)
  res.json(citydetails)
})

app.post('/cities/:id', async (req, res) => {
  console.log('update a city', req.body)
  let updateCity = await City.updateOne(req.body)
})

//delete

app.delete('/cities/:id', async (req, res) => {
  let { id } = req.params
  const citydetails = await City.findByIdAndDelete(id)
  console.log(citydetails)
  res.send(citydetails)
})

app.get('/cityform', async (req, res) => {
  let cityform = await City.find({})
  res.send(cityform)
})

//add city
app.post('/cityform', async (req, res) => {
  console.log('here is the form', req.body)
  let newCity = await City.create(req.body)
  res.send(newCity)
})
app.post('/commentform', async (req, res) => {
  console.log('here is the form', req.body)
  let newComment = await Comment.create(req.body)
  res.send(newComment)
})

// update city
app.post('/updatecity', async (req, res) => {
  console.log('updating city now', req.body)
  let updateCity = await City.updateOne(req.body)
  res.send(updateCity)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
