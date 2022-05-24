const path = require('path')
const fs = require('fs')
const uuid = require('uuid')

const after = async (res, req, context) => {
	const { uploadImage, record } = context

	if (record.isValid()) {
		const fileName =
			'categories' +
			'/' +
			uuid.v4() +
			'.' +
			uploadImage.type.split('/')[1]
		const filePath = path.resolve('static', fileName)

		fs.copyFile(uploadImage.path, filePath, (err) => {
			if (err) {
				console.log('Error Found:', err)
			}
		})
		await record.update({ photo: fileName })
	}
	return res
}

const before = async (req, context) => {
	if (req.method === 'post') {
		const { uploadImage, ...otherParams } = req.payload
		context.uploadImage = uploadImage
		return {
			...req,
			payload: otherParams,
		}
	}

	return req
}

module.exports = { after, before }
