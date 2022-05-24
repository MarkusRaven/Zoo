const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Squad = sequelize.define('squad', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING },
})

module.exports = Squad
