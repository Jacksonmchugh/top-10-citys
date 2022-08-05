const { Schema } = require('mongoose')

const Comment = new Schema(
  {
    name: { type: String, required: true },
    body: { type: String, required: true },
    city: { type: Schema.Types.ObjectId, ref: 'City' }
  },
  { timestamps: true }
)

module.exports = Comment
