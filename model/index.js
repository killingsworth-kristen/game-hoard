// const Friends = require('./friends');
const Games = require('./games');
const User = require('./user');
// const Collection = require ('./collection');
// const Comments = require('./comments'); 

// User.hasOne(Collection, {
//     foreignKey: "user_id"
// });
// Collection.belongsTo(User, {
//     foreignKey: "user_id"
// });

// Collection.hasMany(Games, {
//     foreignKey:"collection_id"
// });
// Games.belongsTo(Collection, {
//     foreignKey: "collection_id"
// });

// Games.belongsToMany(User, {
//     through: Collection
// })

// User.hasMany(Comments,{
// });

// Comments.belongsTo(User,{

// });

User.hasMany(Games,{
    foreignKey: "user_id"
})

Games.belongsTo(User,{
    foreignKey: "user_id"
})

module.exports = {
    User,
    Games,
    // Collection,
    // Comments,
    // Friends
}


