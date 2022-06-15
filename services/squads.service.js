const Squad = require('../models/Squad')

class SquadsService {
	async getSquads() {
		const squads = await Squad.findAll()
		return squads
	}
}
module.exports = new SquadsService()
