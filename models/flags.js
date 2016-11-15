'use strict';
module.exports = function(sequelize, DataTypes) {
  var Flags = sequelize.define('Flags', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    letter_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    file_name: DataTypes.STRING,
    emoji_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Flags;
};