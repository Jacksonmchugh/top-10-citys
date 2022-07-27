const db = require('./db')
const { Comment, City } = require('./models')

const findAllCities = async () => {
  const cities = await City.find()
  console.log('All city:', cities)
}

const findAllComments = async () => {
  const comments = await Comments.find()
  console.log('All comments:', comments)
}

const findOneWithComments = async () => {
  const city = await City.findOne()
  console.log(JSON.stringify(city), null, 2)
}

const run = async () => {
  try {
    await findAllCities()
    await findAllComments()
    await findOneWithComments()
  } catch (error) {
    console.log(error)
  } finally {
    await db.close()
  }
}

run()
