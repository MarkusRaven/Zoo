const properties = {
	encryptedPassword: {
		isVisible: false,
	},
	password: {
		type: 'password',
		isVisible: {
			list: false,
			edit: true,
			filter: false,
			show: false,
		},
	},
}
module.exports = properties
