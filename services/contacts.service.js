const Contacts = require('../models/Contacts')

class CategoriesService {
	async getContacts() {
		const contacts = await Contacts.findAll()
		return contacts
	}
}
module.exports = new CategoriesService()
