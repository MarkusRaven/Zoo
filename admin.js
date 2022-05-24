require('dotenv').config()
const express = require('express')
const app = express()
const pid = process.pid
const PORT = process.env.ADMIN_PORT || 5000
const sequelize = require('./db')

async function start() {
	try {
		await sequelize.authenticate()
		await sequelize.sync()

		app.use('/admin', require('./routes/admin.routes'))

		app.use(express.static(__dirname + '/static'))

		const server = app.listen(PORT, () => {
			console.log(`Server started on port: ${PORT}. Pid: ${pid}`)
		})
		process.on('SIGINT', () => {
			console.log('Signal is SIGINT')
			server.close(() => {
				process.exit(0)
			})
		})

		process.on('SIGTERM', () => {
			console.log('Signal is SIGTERM')
			server.close(() => {
				process.exit(0)
			})
		})

		process.on('SIGUSR2', () => {
			console.log('Signal is SIGUSR2')
			server.close(() => {
				process.exit(1)
			})
		})
	} catch (e) {
		console.log('Server error ', e.message)
		process.exit(1)
	}
}

start()
