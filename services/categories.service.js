const Categories = require('../models/Categories')

class CategoriesService {
	async getCategories() {
		const categories = await Categories.findAll()
		return categories
	}
}
module.exports = new CategoriesService()
