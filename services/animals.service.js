const Animals = require('../models/Animals')
const Category = require('../models/Categories')
const Squad = require('../models/Squad')

class AnimalsService {
	async getAnimals() {
		const animals = await Animals.findAll({
			include: [
				{ model: Category, attributes: ['name'] },
				{ model: Squad, attributes: ['name'] },
			],
		})
		return animals
	}
	async getAnimalsOfSquad(squadId) {
		const animals = await Animals.findAll({
			where: { squadId },
			include: [
				{ model: Category, attributes: ['name'] },
				{ model: Squad, attributes: ['name'] },
			],
		})
		return animals
	}
	async getAnimalsOfCategory(categoryId) {
		const animals = await Animals.findAll({
			where: { categoryId },
			include: [
				{ model: Category, attributes: ['name'] },
				{ model: Squad, attributes: ['name'] },
			],
		})
		return animals
	}
	async getAnimalsOfType(typeId) {
		const animals = await Animals.findAll({
			where: { typeId },
			include: [
				{ model: Category, attributes: ['name'] },
				{ model: Squad, attributes: ['name'] },
			],
		})
		return animals
	}
}
module.exports = new AnimalsService()
