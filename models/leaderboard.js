'use strict';
module.exports = function(sequelize, DataTypes) {
  var Leaderboard = sequelize.define('Leaderboard', {
    player_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    player_name: DataTypes.STRING,
    top_score: {
      type: DataTypes.INTEGER,
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