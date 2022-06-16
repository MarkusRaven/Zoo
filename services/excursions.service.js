const Excursion = require('../models/Excursion')
const Visitors = require('../models/Visitors')
const VisitorsOnExc = require('../models/VisitorsOnExc')

class ExcursionsService {
	async getExcursions() {
		const excursions = await Excursion.findAll()
		return excursions
	}

	async recordExcursion(data) {
		const visitor = await Visitors.create({
			email: data.email,
			full_name: data.full_name,
			tel: data.tel,
		})

		await VisitorsOnExc.create({
			visitorId: visitor.id,
			excursionId: data.excursionId,
		})
		return visitor
	}
}
module.exports = new ExcursionsService()
