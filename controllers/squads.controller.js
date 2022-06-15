const SquadsService = require('../services/squads.service')

class SquadsController {
	async getSquads(req, res) {
		try {
			const squads = await SquadsService.getSquads()
			return res.json(squads)
		} catch (e) {
			res.status(404).send({
				message: 'Error when get squads',
				error: e.message,
			})
		}
	}
}

module.exports = new SquadsController()
