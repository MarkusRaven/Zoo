const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Contacts = sequelize.define('contacts', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	tel: { type: DataTypes.STRING },
	inst: { type: DataTypes.STRING },
	telegram: { type: DataTypes.STRING },
})

module.exports = Contacts
