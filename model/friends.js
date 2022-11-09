const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Friends extends Model {}

Friends.init(
{
    
},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'friends'
    
});

module.exports = Friends;
