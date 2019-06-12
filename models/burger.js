module.exports = function(sequelize, DataTypes) {
	const Burger = sequelize.define('burger', {
		burger_name: {
			type: DataTypes.STRING(255),
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		devoured: { 
			type: DataTypes.BOOLEAN, 
			allowNull: false,
			defaultValue: false
		}
	},{
		sequelize,
		modelName: 'burger',
		freezeTableName: true,
	})
	return Burger;
};