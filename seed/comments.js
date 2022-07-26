const db = require('../db')
const { Comment, City } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  let cities = await City.find()
  const comments = [
    {
      body: 'This is the best city in the USA!',
      city: cities[0]._id
    },
    {
      body: 'This is the best city to live in!',
      city: cities[1]._id
    },
    {
      body: 'This is the most interesting city in the USA!',
      city: cities[2]._id
    },
    {
      body: 'This is the best city in the USA!',
      city: cities[3]._id
    },
    {
      body: 'This is the best city in the USA!',
      city: cities[4]._id
    },
    {
      body: 'This is the best city in the USA!',
      city: cities[5]._id
    },
    {
      body: 'This is the best city in the USA!',
      city: cities[6]._id
    },
    {
      body: 'This is the best city in the USA!',
      city: cities[7]._id
    },
    {
      body: 'This is the best city in the USA!',
      city: cities[8]._id
    },
    {
      body: 'This is the best city in the USA!',
      city: cities[9]._id
    }
  ]
  await Comment.insertMany(comments)
  console.log('comments were added')
}
const run = async () => {
  await main()
  db.close()
}
run()
