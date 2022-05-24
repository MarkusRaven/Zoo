const AnimalsService = require('../services/animals.service')

class AnimalsController {
	async getAnimals(req, res) {
		try {
			const animals = await AnimalsService.getAnimals()
			return res.json(animals)
		} catch (e) {
			res.status(404).send({
				message: 'Error when get Animals',
				error: e.message,
			})
		}
	}
	async getAnimalsOfSquad(req, res) {
		try {
			const animals = await AnimalsService.getAnimalsOfSquad(
				req.params.squadId
			)
			return res.json(animals)
		} catch (e) {
			res.status(404).send({
				message: 'Error when get AnimalsOfSquad',
				error: e.message,
			})
		}
	}
	async getAnimalsOfCategory(req, res) {
		try {
			const animals = await AnimalsService.getAnimalsOfCategory(
				req.params.categoryId
			)
			return res.json(animals)
		} catch (e) {
			res.status(404).send({
				message: 'Error when get AnimalsOfCategory',
				error: e.message,
			})
		}
	}
	async getAnimalsOfType(req, res) {
		try {
			const animals = await AnimalsService.getAnimalsOfType(
				req.params.typeId
			)
			return res.json(animals)
		} catch (e) {
			res.status(404).send({
				message: 'Error when get AnimalsOfType',
				error: e.message,
			})
		}
	}
}

module.exports = new AnimalsController()
