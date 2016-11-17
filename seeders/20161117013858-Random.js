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
    return queryInterface.bulkInsert('Randoms', 
      [
        {
          letter_id: "a",
          file_name: "1f3ef.svg",
          emoji_name: "japanese castle"
        },
        {
          letter_id: "b",
          file_name: "1f6a4.svg",
          emoji_name: "speedboat"
        },
        {
          letter_id: "c",
          file_name: "1f6bc.svg",
          emoji_name: "baby symbol"
        },
        {
          letter_id: "d",
          file_name: "1f30e.svg",
          emoji_name: "earth globe americas"
        },
        {
          letter_id: "e",
          file_name: "1f31e.svg",
          emoji_name: "sun with face"
        },
        {
          letter_id: "f",
          file_name: "1f36a.svg",
          emoji_name: "cookie"
        },
        {
          letter_id: "g",
          file_name: "1f38f.svg",
          emoji_name: "carp streamer"
        },
        {
          letter_id: "h",
          file_name: "1f46f.svg",
          emoji_name: "woman with bunny ears"
        },
        {
          letter_id: "i",
          file_name: "1f47a.svg",
          emoji_name: "japanese goblin"
        },
        {
          letter_id: "j",
          file_name: "1f47b.svg",
          emoji_name: "ghost"
        },
        {
          letter_id: "k",
          file_name: "1f64a.svg",
          emoji_name: "speak-no-evil monkey"
        },
        {
          letter_id: "l",
          file_name: "1f93c-1f3fd.svg",
          emoji_name: "wrestlers tone 3"
        },
        {
          letter_id: "m",
          file_name: "1f335.svg",
          emoji_name: "cactus"
        },
        {
          letter_id: "n",
          file_name: "1f363.svg",
          emoji_name: "sushi"
        },
        {
          letter_id: "o",
          file_name: "1f405.svg",
          emoji_name: "tiger"
        },
        {
          letter_id: "p",
          file_name: "1f429.svg",
          emoji_name: "poodle"
        },
        {
          letter_id: "q",
          file_name: "1f911.svg",
          emoji_name: "money-mouth face"
        },
        {
          letter_id: "r",
          file_name: "1f914.svg",
          emoji_name: "thinking face"
        },
        {
          letter_id: "s",
          file_name: "1f916.svg",
          emoji_name: "robot face"
        },
        {
          letter_id: "t",
          file_name: "1f917.svg",
          emoji_name: "hugging face"
        },
        {
          letter_id: "u",
          file_name: "1f988.svg",
          emoji_name: "shark"
        },
        {
          letter_id: "v",
          file_name: "262f.svg",
          emoji_name: "yin yang"
        },
        {
          letter_id: "w",
          file_name: "2622.svg",
          emoji_name: "radioactive sign"
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
    return queryInterface.bulkDelete('Randoms', null, {});
  }
};
