const AnimalsTypes = require('../models/Visitors')

class FilterService {
	async getFilters() {
		const filters = await AnimalsTypes.findAll()
		return filters
	}
	async addFilter(name) {
		const filter = await AnimalsTypes.create({
			name,
		})
		return filter
	}
}
module.exports = new FilterService()
