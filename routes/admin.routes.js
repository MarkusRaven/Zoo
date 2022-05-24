const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const AdminJSSequelize = require('@adminjs/sequelize')
const options = require('../admin/admin-options')
const bcrypt = require('bcrypt')

const User = require('../models/User')

AdminJS.registerAdapter(AdminJSSequelize)

const adminJs = new AdminJS(options)
// const router = AdminJSExpress.buildRouter(adminJs)
const router = AdminJSExpress.buildAuthenticatedRouter(
	adminJs,
	{
		authenticate: async (email, password) => {
			const user = await User.findOne({ where: { email } })
			if (user) {
				const matched = await bcrypt.compare(
					password,
					user.encryptedPassword
				)
				if (matched) {
					return user
				}
			}
			return false
		},
		cookiePassword: 'some-secret-password-used-to-secure-cookie',
	},
	null,
	{
		resave: false,
		saveUninitialized: true,
	}
)

module.exports = router
