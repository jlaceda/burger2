'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('burger', [
		{ 
			burger_name: 'Big Mac',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{ 
			burger_name: 'Quarter Pounder',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			burger_name: 'Royale with Cheese',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			burger_name: 'Whooper',
			createdAt: new Date(),
			updatedAt: new Date()
		}
		], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('burger', null, {});
	}
};
