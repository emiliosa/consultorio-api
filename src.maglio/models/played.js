'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class played extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			played.belongsTo(models.users, {
				as: 'users',
				foreignKey: 'user_id'
			})
			played.belongsTo(models.games, {
				as: 'games',
				foreignKey: 'game_id'
			})
		}
	};
	played.init({
		user_id: {
			allowNull: false,
			type: DataTypes.INTEGER,
		},
		game_id: {
			allowNull: false,
			type: DataTypes.INTEGER,
		},
		status: DataTypes.CHAR
	}, {
		sequelize,
		modelName: 'played',
	});
	return played;
};