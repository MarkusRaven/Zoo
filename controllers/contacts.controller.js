const ContactsService = require('../services/contacts.service')

class ContactsController {
	async getContacts(req, res) {
		try {
			const categories = await ContactsService.getContacts()
			return res.json(categories)
		} catch (e) {
			res.status(404).send({
				message: 'Error when get contacts',
				error: e.message,
			})
		}
	}
}

module.exports = new ContactsController()
