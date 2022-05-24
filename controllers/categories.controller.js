const CategoriesService = require('../services/categories.service')

class CategoriesController {
	async getCategories(req, res) {
		try {
			const categories = await CategoriesService.getCategories()
			return res.json(categories)
		} catch (e) {
			res.status(404).send({
				message: 'Error when get categories',
				error: e.message,
			})
		}
	}
}

module.exports = new CategoriesController()
