const AdminJS = require('adminjs')
const path = require('path')
const fs = require('fs')
const uuid = require('uuid')

const after = async (res, req, context) => {
	const { record } = context

	if (record.isValid()) {
		const pathArray = []
		Object.keys(req.payload).forEach(async (key) => {
			const uploadImage = req.payload[key]
			const fileName =
				'excursions' +
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
			pathArray.push(`${fileName}`)
		})
		await record.update({ photo: pathArray })
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
