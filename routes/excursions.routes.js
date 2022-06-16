const { Router } = require('express')
const ExcursionsController = require('../controllers/excursions.controller')
const router = Router()

router.get('/', ExcursionsController.getExcursions)

router.post('/record', ExcursionsController.recordExcursion)

module.exports = router
