'use strict';
module.exports = function(sequelize, DataTypes) {
  var Animals = sequelize.define('Animals', {
    id: DataTypes.INTEGER,
    letter_id: DataTypes.INTEGER,
    file_name: DataTypes.STRING,
    emoji_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Animals;
};