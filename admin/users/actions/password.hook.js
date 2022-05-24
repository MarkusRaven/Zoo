const bcrypt = require('bcrypt')

const after = async (response) => {
	if (
		response.record &&
		response.record.errors &&
		response.record.errors.encryptedPassword
	) {
		response.record.errors.password =
			response.record.errors.encryptedPassword
	}
	return response
}
const before = async (request) => {
	if (request.payload.password) {
		request.payload = {
			...request.payload,
			encryptedPassword: await bcrypt.hash(request.payload.password, 10),
			password: undefined,
		}
	}
	return request
}

module.exports = { after, before }
