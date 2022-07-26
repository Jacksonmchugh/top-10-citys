const { Schema } = require('mongoose')

const Comment = new Schema(
  {
    body: { type: String, required: true },
    city: { type: Schema.Types.ObjectId, ref: 'city_id' }
  },
  { timestamps: true }
)

module.exports = Comment
