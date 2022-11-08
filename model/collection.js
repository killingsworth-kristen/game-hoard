const { Model, DataTypes } = require('sequelize');
const sequelize = require('../model/connection');

class Collection extends Model {}

Collection.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'collection'
        
    });
    module.exports = Collection;