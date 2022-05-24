const { Router } = require('express')
const ContactsController = require('../controllers/contacts.controller')
const router = Router()

router.get('/', ContactsController.getContacts)

module.exports = router
