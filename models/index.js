const mongoose = require('mongoose')
const CitySchema = require('./city')
const CommentSchema = require('./comment')
const City = mongoose.model('City', CitySchema)
const Comment = mongoose.model('Comment', CommentSchema)

module.exports = {
  City,
  Comment
}
