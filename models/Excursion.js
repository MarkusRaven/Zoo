const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Excursion = sequelize.define('excursion', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	photo: { type: DataTypes.ARRAY(DataTypes.STRING) },
	date: { type: DataTypes.STRING },
	title: { type: DataTypes.STRING },
	description: { type: DataTypes.STRING },
	groups: { type: DataTypes.STRING },
	age_limit: { type: DataTypes.STRING },
	duration: { type: DataTypes.STRING },
})

module.exports = Excursion
