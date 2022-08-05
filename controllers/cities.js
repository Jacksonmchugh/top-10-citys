const { Cities } = require('../models')

const getAllCities = async (req, res) => {
  let cities = await Cities.find({}).populate('comments')
  res.send(cities)
}

const createCity = async (req, res) => {
  let createdCity = await Cities.create(req.body)
  res.send(createdCity)
}
const getOneCity = async (req, res) => {
  let foundCity = await Cities.findById(req.params.id).populate('comments')
  res.send(foundCity)
}

module.exports = {
  getAllCities,
  createCity,
  getOneCity
}
