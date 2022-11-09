const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init({
    comment: {
        type: DataTypes.TEXT,
        allowNull: false,
    

    },
},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments'
})
module.exports = Comments;


