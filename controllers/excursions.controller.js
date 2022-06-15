const ExcursionsService = require('../services/excursions.service')

class AnimalsController {
	async getExcursions(req, res) {
		try {
			const excursions = await ExcursionsService.getExcursions()
			return res.json(excursions)
		} catch (e) {
			res.status(404).send({
				message: 'Error when get excursions',
				error: e.message,
			})
		}
	}
}

module.exports = new AnimalsController()
