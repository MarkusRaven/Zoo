const sequelize = require('../db')
const { DataTypes } = require('sequelize')
const Categories = require('./Categories')
const Squad = require('./Squad')

const Animals = sequelize.define('animals', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	photo: { type: DataTypes.STRING },
	name: { type: DataTypes.STRING },
	animals: { type: DataTypes.STRING },
	short_desc: { type: DataTypes.STRING(510) },
	age: { type: DataTypes.STRING },
	birthday: { type: DataTypes.STRING },
	color: { type: DataTypes.STRING },
	character: { type: DataTypes.STRING },
})

Categories.hasMany(Animals)
Animals.belongsTo(Categories)
Squad.hasMany(Animals)
Animals.belongsTo(Squad)

module.exports = Animals
