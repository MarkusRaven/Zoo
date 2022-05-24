const sequelize = require('../db')
const { DataTypes } = require('sequelize')
const Animals = require('./Animals')

const AnimalTypes = sequelize.define(
	'animalTypes',
	{
		id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
		name: { type: DataTypes.STRING },
	},
	{ timestamps: false }
)

AnimalTypes.hasMany(Animals)
Animals.belongsTo(AnimalTypes)

module.exports = AnimalTypes
