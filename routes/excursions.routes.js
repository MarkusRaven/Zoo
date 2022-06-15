const { Router } = require('express')
const ExcursionsController = require('../controllers/excursions.controller')
const router = Router()

router.get('/', ExcursionsController.getExcursions)

module.exports = router
