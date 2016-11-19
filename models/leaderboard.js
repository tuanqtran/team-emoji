'use strict';
module.exports = function(sequelize, DataTypes) {
  var Leaderboard = sequelize.define('Leaderboard', {
    player_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    player_name: DataTypes.STRING,
    time: {
      type: DataTypes.STRING,
      allowNull: false
    },
    accuracy: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Leaderboard;
};