'use strict';
module.exports = function(sequelize, DataTypes) {
  var Leaderboards = sequelize.define('Leaderboards', 
    {
      player_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      player_name: {
        type: DataTypes.STRING
      },
      time: {
        type: DataTypes.INTEGER
      },
      accuracy: {
        type: DataTypes.FLOAT
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      }
    }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Leaderboards;
};