const { Router } = require('express')
const SquadsController = require('../controllers/squads.controller')
const router = Router()

router.get('/', SquadsController.getSquads)

module.exports = router
