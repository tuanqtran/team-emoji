'use strict';

var models = require("../models");

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return models.Animals.bulkCreate(
      [
        {
          letter_id: "a",
          file_name: "1f40a.svg",
          emoji_name: "crocodile"
        },
        {
          letter_id: "b",
          file_name: "1f40b.svg",
          emoji_name: "whale"
        },
        {
          letter_id: "c",
          file_name: "1f40c.svg",
          emoji_name: "snail"
        },
        {
          letter_id: "d",
          file_name: "1f40d.svg",
          emoji_name: "snake"
        },
        {
          letter_id: "e",
          file_name: "1f40f.svg",
          emoji_name: "ram"
        },
        {
          letter_id: "f",
          file_name: "1f41c.svg",
          emoji_name: "ant"
        },
        {
          letter_id: "g",
          file_name: "1f41d.svg",
          emoji_name: "honeybee"
        },
        {
          letter_id: "h",
          file_name: "1f41e.svg",
          emoji_name: "lady beetle"
        },
        {
          letter_id: "i",
          file_name: "1f41f.svg",
          emoji_name: "fish"
        },
        {
          letter_id: "j",
          file_name: "1f43a.svg",
          emoji_name: "wolf face"
        },
        {
          letter_id: "k",
          file_name: "1f43b.svg",
          emoji_name: "bear face"
        },
        {
          letter_id: "l",
          file_name: "1f436.svg",
          emoji_name: "dog face"
        },
        {
          letter_id: "m",
          file_name: "1f437.svg",
          emoji_name: "pig face"
        },
        {
          letter_id: "n",
          file_name: "1f439.svg",
          emoji_name: "hamster face"
        },
        {
          letter_id: "o",
          file_name: "1f401.svg",
          emoji_name: "mouse"
        },
        {
          letter_id: "p",
          file_name: "1f402.svg",
          emoji_name: "ox"
        },
        {
          letter_id: "q",
          file_name: "1f409.svg",
          emoji_name: "dragon"
        },
        {
          letter_id: "r",
          file_name: "1f412.svg",
          emoji_name: "monkey"
        },
        {
          letter_id: "s",
          file_name: "1f413.svg",
          emoji_name: "rooster"
        },
        {
          letter_id: "t",
          file_name: "1f421.svg",
          emoji_name: "blowfish"
        },
        {
          letter_id: "u",
          file_name: "1f422.svg",
          emoji_name: "turtle"
        },
        {
          letter_id: "v",
          file_name: "1f427.svg",
          emoji_name: "penguin"
        },
        {
          letter_id: "w",
          file_name: "1f428.svg",
          emoji_name: "koala"
        },
        {
          letter_id: "y",
          file_name: "2620.svg",
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
      return queryInterface.dropTable('users');
    */
    return models.Animals.destroy(
      {where:
        {id: 
          {$gt: 0}
        }
      }
    )
    return models.Flags.destroy(
      {where:
        {id: 
          {$gt: 0}
        }
      }
    )
    return models.Random.destroy(
      {where:
        {id: 
          {$gt: 0}
        }
      }
    )
  }
};
