module.exports = function (app) {
	app.use('/categories', require('./categories.routes'))
	app.use('/animals', require('./animals.routes'))
	app.use('/contacts', require('./contacts.routes'))
}
