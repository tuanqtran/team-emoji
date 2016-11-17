// 'use strict';

// var models = require("../models");

// module.exports = {
//   up: function (queryInterface, Sequelize) {
//     /*
//       Add altering commands here.
//       Return a promise to correctly handle asynchronicity.

//       Example:
//       return queryInterface.createTable('users', { id: Sequelize.INTEGER });
//     */
//     return models.Animals.bulkCreate(
//       [
//         {
//           letter_id: "a",
//           file_name: "1f40a.svg",
//           emoji_name: "crocodile"
//         },
//         {
//           letter_id: "b",
//           file_name: "1f40b.svg",
//           emoji_name: "whale"
//         },
//         {
//           letter_id: "c",
//           file_name: "1f40c.svg",
//           emoji_name: "snail"
//         },
//         {
//           letter_id: "d",
//           file_name: "1f40d.svg",
//           emoji_name: "snake"
//         },
//         {
//           letter_id: "e",
//           file_name: "1f40f.svg",
//           emoji_name: "ram"
//         },
//         {
//           letter_id: "f",
//           file_name: "1f41c.svg",
//           emoji_name: "ant"
//         },
//         {
//           letter_id: "g",
//           file_name: "1f41d.svg",
//           emoji_name: "honeybee"
//         },
//         {
//           letter_id: "h",
//           file_name: "1f41e.svg",
//           emoji_name: "lady beetle"
//         },
//         {
//           letter_id: "i",
//           file_name: "1f41f.svg",
//           emoji_name: "fish"
//         },
//         {
//           letter_id: "j",
//           file_name: "1f43a.svg",
//           emoji_name: "wolf face"
//         },
//         {
//           letter_id: "k",
//           file_name: "1f43b.svg",
//           emoji_name: "bear face"
//         },
//         {
//           letter_id: "l",
//           file_name: "1f436.svg",
//           emoji_name: "dog face"
//         },
//         {
//           letter_id: "m",
//           file_name: "1f437.svg",
//           emoji_name: "pig face"
//         },
//         {
//           letter_id: "n",
//           file_name: "1f439.svg",
//           emoji_name: "hamster face"
//         },
//         {
//           letter_id: "o",
//           file_name: "1f401.svg",
//           emoji_name: "mouse"
//         },
//         {
//           letter_id: "p",
//           file_name: "1f402.svg",
//           emoji_name: "ox"
//         },
//         {
//           letter_id: "q",
//           file_name: "1f409.svg",
//           emoji_name: "dragon"
//         },
//         {
//           letter_id: "r",
//           file_name: "1f412.svg",
//           emoji_name: "monkey"
//         },
//         {
//           letter_id: "s",
//           file_name: "1f413.svg",
//           emoji_name: "rooster"
//         },
//         {
//           letter_id: "t",
//           file_name: "1f421.svg",
//           emoji_name: "blowfish"
//         },
//         {
//           letter_id: "u",
//           file_name: "1f422.svg",
//           emoji_name: "turtle"
//         },
//         {
//           letter_id: "v",
//           file_name: "1f427.svg",
//           emoji_name: "penguin"
//         },
//         {
//           letter_id: "w",
//           file_name: "1f428.svg",
//           emoji_name: "koala"
//         }
//       ]
//     )

//     return models.Flags.bulkCreate(
//       [
//         {
//           letter_id: "a",
//           file_name: "1f1e6-1f1f1.svg",
//           emoji_name: "albania"
//         },
//         {
//           letter_id: "b",
//           file_name: "1f1e6-1f1f4.svg",
//           emoji_name: "angola"
//         },
//         {
//           letter_id: "c",
//           file_name: "1f1e6-1f1f7.svg",
//           emoji_name: "argentina"
//         },
//         {
//           letter_id: "d",
//           file_name: "1f1e6-1f1fa.svg",
//           emoji_name: "australia"
//         },
//         {
//           letter_id: "e",
//           file_name: "1f1e7-1f1ea.svg",
//           emoji_name: "belgium"
//         },
//         {
//           letter_id: "f",
//           file_name: "1f1e7-1f1ed.svg",
//           emoji_name: "bahrain"
//         },
//         {
//           letter_id: "g",
//           file_name: "1f1e7-1f1ee.svg",
//           emoji_name: "burundi"
//         },
//         {
//           letter_id: "h",
//           file_name: "1f1e7-1f1f7.svg",
//           emoji_name: "brazil"
//         },
//         {
//           letter_id: "i",
//           file_name: "1f1e7-1f1fb.svg",
//           emoji_name: "bouvet island"
//         },
//         {
//           letter_id: "j",
//           file_name: "1f1e8-1f1e6.svg",
//           emoji_name: "canada"
//         },
//         {
//           letter_id: "k",
//           file_name: "1f1e8-1f1ed.svg",
//           emoji_name: "switzerland"
//         },
//         {
//           letter_id: "l",
//           file_name: "1f1e8-1f1f3.svg",
//           emoji_name: "china"
//         },
//         {
//           letter_id: "m",
//           file_name: "1f1e9-1f1ea.svg",
//           emoji_name: "germany"
//         },
//         {
//           letter_id: "n",
//           file_name: "1f1e9-1f1f0.svg",
//           emoji_name: "denmark"
//         },
//         {
//           letter_id: "o",
//           file_name: "1f1ea-1f1ed.svg",
//           emoji_name: "western sahara"
//         },
//         {
//           letter_id: "p",
//           file_name: "1f1ec-1f1e7.svg",
//           emoji_name: "great britain"
//         },
//         {
//           letter_id: "q",
//           file_name: "1f1ed-1f1f0.svg",
//           emoji_name: "hong kong"
//         },
//         {
//           letter_id: "r",
//           file_name: "1f1ee-1f1f2.svg",
//           emoji_name: "isle of man"
//         },
//         {
//           letter_id: "s",
//           file_name: "1f1ef-1f1f5.svg",
//           emoji_name: "japan"
//         },
//         {
//           letter_id: "t",
//           file_name: "1f1f0-1f1f7.svg",
//           emoji_name: "korea"
//         },
//         {
//           letter_id: "u",
//           file_name: "1f1f3-1f1f5.svg",
//           emoji_name: "nepal"
//         },
//         {
//           letter_id: "v",
//           file_name: "1f1f9-1f1f7.svg",
//           emoji_name: "turkey"
//         },
//         {
//           letter_id: "w",
//           file_name: "1f1fa-1f1f8.svg",
//           emoji_name: "united states"
//         }
//       ]
//     )

//     return models.Randoms.bulkCreate(
//       [
//         {
//           letter_id: "a",
//           file_name: "1f3ef.svg",
//           emoji_name: "japanese castle"
//         },
//         {
//           letter_id: "b",
//           file_name: "1f6a4.svg",
//           emoji_name: "speedboat"
//         },
//         {
//           letter_id: "c",
//           file_name: "1f6bc.svg",
//           emoji_name: "baby symbol"
//         },
//         {
//           letter_id: "d",
//           file_name: "1f30e.svg",
//           emoji_name: "earth globe americas"
//         },
//         {
//           letter_id: "e",
//           file_name: "1f31e.svg",
//           emoji_name: "sun with face"
//         },
//         {
//           letter_id: "f",
//           file_name: "1f36a.svg",
//           emoji_name: "cookie"
//         },
//         {
//           letter_id: "g",
//           file_name: "1f38f.svg",
//           emoji_name: "carp streamer"
//         },
//         {
//           letter_id: "h",
//           file_name: "1f46f.svg",
//           emoji_name: "woman with bunny ears"
//         },
//         {
//           letter_id: "i",
//           file_name: "1f47a.svg",
//           emoji_name: "japanese goblin"
//         },
//         {
//           letter_id: "j",
//           file_name: "1f47b.svg",
//           emoji_name: "ghost"
//         },
//         {
//           letter_id: "k",
//           file_name: "1f64a.svg",
//           emoji_name: "speak-no-evil monkey"
//         },
//         {
//           letter_id: "l",
//           file_name: "1f93c-1f3fd.svg",
//           emoji_name: "wrestlers tone 3"
//         },
//         {
//           letter_id: "m",
//           file_name: "1f335.svg",
//           emoji_name: "cactus"
//         },
//         {
//           letter_id: "n",
//           file_name: "1f363.svg",
//           emoji_name: "sushi"
//         },
//         {
//           letter_id: "o",
//           file_name: "1f405.svg",
//           emoji_name: "tiger"
//         },
//         {
//           letter_id: "p",
//           file_name: "1f429.svg",
//           emoji_name: "poodle"
//         },
//         {
//           letter_id: "q",
//           file_name: "1f911.svg",
//           emoji_name: "money-mouth face"
//         },
//         {
//           letter_id: "r",
//           file_name: "1f914.svg",
//           emoji_name: "thinking face"
//         },
//         {
//           letter_id: "s",
//           file_name: "1f916.svg",
//           emoji_name: "robot face"
//         },
//         {
//           letter_id: "t",
//           file_name: "1f917.svg",
//           emoji_name: "hugging face"
//         },
//         {
//           letter_id: "u",
//           file_name: "1f988.svg",
//           emoji_name: "shark"
//         },
//         {
//           letter_id: "v",
//           file_name: "262f.svg",
//           emoji_name: "yin yang"
//         },
//         {
//           letter_id: "w",
//           file_name: "2622.svg",
//           emoji_name: "radioactive sign"
//         }
//       ]
//     )

//     return models.Specials.bulkCreate(
//       [
//         {
//           letter_id: "y",
//           file_name: "skull.svg",
//           emoji_name: "skull and crossbones"
//         },
//         {
//           letter_id: "z",
//           file_name: "milo.svg",
//           emoji_name: "milo"
//         }
//       ]
//     )
//   },

//   down: function (queryInterface, Sequelize) {
//     /*
//       Add reverting commands here.
//       Return a promise to correctly handle asynchronicity.

//       Example:
//       return queryInterface.dropTable('users');
//     */
//     return models.Animals.destroy(
//       {where:
//         {id: 
//           {$gt: 0}
//         }
//       }
//     )
//     return models.Flags.destroy(
//       {where:
//         {id: 
//           {$gt: 0}
//         }
//       }
//     )
//     return models.Randoms.destroy(
//       {where:
//         {id: 
//           {$gt: 0}
//         }
//       }
//     )
//     return models.Specials.destroy(
//       {where:
//         {id: 
//           {$gt: 0}
//         }
//       }
//     )
//   }
// };
