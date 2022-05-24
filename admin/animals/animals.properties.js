const AdminJS = require('adminjs')

const properties = {
	photo: {
		isVisible: {
			list: false,
			filter: false,
			show: true,
			edit: false,
		},
	},
	uploadImage: {
		isVisible: {
			list: true,
			filter: false,
			show: false,
			edit: true,
		},
		components: {
			edit: AdminJS.bundle('./components/upload-image.jsx'),
			list: AdminJS.bundle('./components/upload-image-list.jsx'),
		},
	},
}
module.exports = properties
