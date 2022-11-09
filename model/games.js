const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Games extends Model {}

Games.init(
  {
        name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },

    genre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    number_players: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
       },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'games',
  }
);

module.exports = Games;