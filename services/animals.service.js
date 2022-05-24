const Animals = require('../models/Animals')

class CategoriesService {
	async getAnimals() {
		const animals = await Animals.findAll()
		return animals
	}
	async getAnimalsOfSquad(squadId) {
		const animals = await Animals.findAll({ where: { squadId } })
		return animals
	}
	async getAnimalsOfCategory(categoryId) {
		const animals = await Animals.findAll({ where: { categoryId } })
		return animals
	}
	async getAnimalsOfType(typeId) {
		const animals = await Animals.findAll({ where: { typeId } })
		return animals
	}
}
module.exports = new CategoriesService()
