const sequelize = require('../db')
const { DataTypes } = require('sequelize')
const Excursion = require('./Excursion')
const VisitorsOnExc = require('./VisitorsOnExc')

const Visitors = sequelize.define('visitors', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	email: { type: DataTypes.STRING },
	full_name: { type: DataTypes.STRING },
	tel: { type: DataTypes.STRING },
})

Excursion.belongsToMany(Visitors, { through: VisitorsOnExc })

module.exports = Visitors
