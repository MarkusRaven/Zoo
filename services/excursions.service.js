const Excursion = require('../models/Excursion')

class ExcursionsService {
	async getExcursions() {
		const excursions = await Excursion.findAll()
		return excursions
	}
}
module.exports = new ExcursionsService()
