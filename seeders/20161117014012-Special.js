'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Specials', 
      [
        {
          letter_id: "y",
          file_name: "skull.svg",
          emoji_name: "skull and crossbones"
        },
        {
          letter_id: "z",
          file_name: "milo.svg",
          emoji_name: "milo"
        }
      ]
    ) 
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Specials', null, {});
  }
};
