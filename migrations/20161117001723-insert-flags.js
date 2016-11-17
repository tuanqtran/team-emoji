'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return models.Flags.bulkCreate(
      [
        {
          letter_id: "a",
          file_name: "1f1e6-1f1f1.svg",
          emoji_name: "albania"
        },
        {
          letter_id: "b",
          file_name: "1f1e6-1f1f4.svg",
          emoji_name: "angola"
        },
        {
          letter_id: "c",
          file_name: "1f1e6-1f1f7.svg",
          emoji_name: "argentina"
        },
        {
          letter_id: "d",
          file_name: "1f1e6-1f1fa.svg",
          emoji_name: "australia"
        },
        {
          letter_id: "e",
          file_name: "1f1e7-1f1ea.svg",
          emoji_name: "belgium"
        },
        {
          letter_id: "f",
          file_name: "1f1e7-1f1ed.svg",
          emoji_name: "bahrain"
        },
        {
          letter_id: "g",
          file_name: "1f1e7-1f1ee.svg",
          emoji_name: "burundi"
        },
        {
          letter_id: "h",
          file_name: "1f1e7-1f1f7.svg",
          emoji_name: "brazil"
        },
        {
          letter_id: "i",
          file_name: "1f1e7-1f1fb.svg",
          emoji_name: "bouvet island"
        },
        {
          letter_id: "j",
          file_name: "1f1e8-1f1e6.svg",
          emoji_name: "canada"
        },
        {
          letter_id: "k",
          file_name: "1f1e8-1f1ed.svg",
          emoji_name: "switzerland"
        },
        {
          letter_id: "l",
          file_name: "1f1e8-1f1f3.svg",
          emoji_name: "china"
        },
        {
          letter_id: "m",
          file_name: "1f1e9-1f1ea.svg",
          emoji_name: "germany"
        },
        {
          letter_id: "n",
          file_name: "1f1e9-1f1f0.svg",
          emoji_name: "denmark"
        },
        {
          letter_id: "o",
          file_name: "1f1ea-1f1ed.svg",
          emoji_name: "western sahara"
        },
        {
          letter_id: "p",
          file_name: "1f1ec-1f1e7.svg",
          emoji_name: "great britain"
        },
        {
          letter_id: "q",
          file_name: "1f1ed-1f1f0.svg",
          emoji_name: "hong kong"
        },
        {
          letter_id: "r",
          file_name: "1f1ee-1f1f2.svg",
          emoji_name: "isle of man"
        },
        {
          letter_id: "s",
          file_name: "1f1ef-1f1f5.svg",
          emoji_name: "japan"
        },
        {
          letter_id: "t",
          file_name: "1f1f0-1f1f7.svg",
          emoji_name: "korea"
        },
        {
          letter_id: "u",
          file_name: "1f1f3-1f1f5.svg",
          emoji_name: "nepal"
        },
        {
          letter_id: "v",
          file_name: "1f1f9-1f1f7.svg",
          emoji_name: "turkey"
        },
        {
          letter_id: "w",
          file_name: "1f1fa-1f1f8.svg",
          emoji_name: "united states"
        }
      ]
    )
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
