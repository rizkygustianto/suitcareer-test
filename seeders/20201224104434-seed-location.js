'use strict';

const locations = [
  {
    name: 'Jakarta',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Bali',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Surabaya',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Makassar',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Jambi',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Yogyakarta',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Locations', locations) 
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Locations', null, {});
  }
};
