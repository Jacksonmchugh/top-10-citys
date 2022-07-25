const mongoose = require('mongoose')
const CitySchema = require('./city')

const City = mongoose.model('City', CitySchema)

module.exports = {
  City
}
