const animalsProperties = require('./animals/animals.properties')
const usersProperties = require('./users/users.properties')
const darkTheme = require('./theme/admin-theme')
const path = require('path')
const AdminJS = require('adminjs')

const Animals = require('../models/Animals')
const AnimalsTypes = require('../models/AnimalsTypes')
const Categories = require('../models/Categories')
const Contacts = require('../models/Contacts')
const Excursion = require('../models/Excursion')
const Squad = require('../models/Squad')
const Visitors = require('../models/Visitors')
const VisitorsOnExc = require('../models/VisitorsOnExc')
const User = require('../models/User')

const {
	after: passwordAfterHook,
	before: passwordBeforeHook,
} = require('./users/actions/password.hook')

const {
	after: uploadAfterHook,
	before: uploadBeforeHook,
} = require('./animals/actions/upload-image.hook')

const {
	after: uploadsAfterHook,
	before: uploadsBeforeHook,
} = require('./animals/actions/upload-images.hook')

const options = {
	resources: [
		{
			resource: User,
			options: {
				properties: usersProperties,
				actions: {
					new: {
						after: passwordAfterHook,
						before: passwordBeforeHook,
					},
					edit: {
						after: passwordAfterHook,
						before: passwordBeforeHook,
					},
				},
			},
		},
		VisitorsOnExc,
		Visitors,
		Squad,
		{
			resource: Excursion,
			options: {
				properties: animalsProperties,
				actions: {
					new: {
						after: async (res, req, context) => {
							return uploadsAfterHook(res, req, context)
						},
						before: async (req, context) => {
							return uploadsBeforeHook(req, context)
						},
					},
					edit: {
						after: async (res, req, context) => {
							return uploadsAfterHook(res, req, context)
						},
						before: async (req, context) => {
							return uploadsBeforeHook(req, context)
						},
					},
				},
			},
		},
		Contacts,
		{
			resource: Categories,
			options: {
				properties: animalsProperties,
				actions: {
					new: {
						after: async (res, req, context) => {
							return uploadAfterHook(res, req, context)
						},
						before: async (req, context) => {
							return uploadBeforeHook(req, context)
						},
					},
					edit: {
						after: async (res, req, context) => {
							return uploadsAfterHook(res, req, context)
						},
						before: async (req, context) => {
							return uploadsBeforeHook(req, context)
						},
					},
					show: {
						isVisible: false,
					},
				},
			},
		},
		AnimalsTypes,
		{
			resource: Animals,
			options: {
				properties: animalsProperties,
				actions: {
					new: {
						after: async (res, req, context) => {
							return uploadAfterHook(res, req, context)
						},
						before: async (req, context) => {
							return uploadBeforeHook(req, context)
						},
					},
					edit: {
						after: async (res, req, context) => {
							return uploadAfterHook(res, req, context)
						},
						before: async (req, context) => {
							return uploadBeforeHook(req, context)
						},
					},
				},
			},
		},
	],
	dashboard: {
		component: AdminJS.bundle('../admin/my-dashboard-component'),
	},
	locale: {
		translations: {
			labels: {
				Animals: 'Животные',
			},
		},
	},
	branding: {
		companyName: 'Zoo',
		logo: 'http://localhost:5000/logo.png',
		softwareBrothers: false,
		theme: darkTheme,
	},
	rootPath: '/admin',
}

module.exports = options
