const { City, Comment } = require('../models')

const getAllComments = async (req, res) => {
  let allComments = await Comment.find({})
  res.send(allComments)
}

const createComment = async (req, res) => {
  let city = await City.findById(req.params.id)
  let commentBody = { ...req.body, city: req.params.id }
  let newComment = await Comment.create(commentBody)
  city.commentss.push(newComment._id)
  city.save()
  res.send(newComment)
}
const getComment = async (req, res) => {
  let comment = await Comment.findById(req.params.id).populate('city')
  res.send(comment)
}

const updateComment = async (req, res) => {
  let updateComment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.send(updateComment)
}

const deleteComment = async (req, res) => {
  let deletedRecord = await Comment.findByIdAndDelete(req.params.id)
  res.send(deletedRecord)
}

module.exports = {
  getAllComments,
  createComment,
  getComment,
  updateComment,
  deleteComment
}
