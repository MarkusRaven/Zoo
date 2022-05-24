const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const VisitorsOnExc = sequelize.define('visitorsOnExc', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

module.exports = VisitorsOnExc
