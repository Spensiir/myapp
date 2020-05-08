'use strict'
module.exports = (sequelize, Datatypes) => {
	var User = sequelize.define('User', {
		id: {
			type: Datatypes.UUID,
			defaultValue: Datatypes.UUIDV4,

			allowNull: false,
			primaryKey: true
		},
		username: {
			type: Datatypes.STRING,
			allowNull:true
		},
		firstname: {
			type: Datatypes.STRING,
			allowNull:true
		},
		lastname: {
			type: Datatypes.STRING,
			allowNull:true
		},
		password: {
			type: Datatypes.STRING,
			allowNull:true
		},
		email: {
			type: Datatypes.STRING,
			allowNull:false,
			unique: true
		},
	})
	return User;
}