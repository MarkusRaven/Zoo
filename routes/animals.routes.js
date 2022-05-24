const { Router } = require('express')
const AnimalsController = require('../controllers/animals.controller')
const router = Router()

router.get('/', AnimalsController.getAnimals)

router.get('/squad/:squadId', AnimalsController.getAnimalsOfSquad)

router.get('/category/:categoryId', AnimalsController.getAnimalsOfCategory)

router.get('/type/:typeId', AnimalsController.getAnimalsOfType)

module.exports = router
