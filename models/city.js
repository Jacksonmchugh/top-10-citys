const { Schema } = require('mongoose')

const City = new Schema(
  {
    name: { type: String, required: true },
    state: { type: String, required: true },
    image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = City
