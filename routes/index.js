const { Router } = require('express')
const { cites, comments } = require('../controllers')
const router = Router()

router.get('/cities', cities.getAllCities)
router.post('/cities', cities.createCity)
router.get('/cities/:id', cities.getOneCity)
router.post('/cities/:id/comments', comments.createComment)

router.get('/comments', comments.getAllComments)
router.get('/comments/:id', comments.getComment)
router.put('/comments/:id', comments.updateComment)
router.delete('/comments/:id', comments.deleteComment)

module.exports = router
