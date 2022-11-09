const Friends = require('./friends');
const Games = require('./games');
const User = require('./user');
const Collection = require ('./collection');
const Comments = require('./comments'); 

User.hasOne(Collection, {
});
Collection.belongsTo(User, {
});

Collection.hasMany(Games, {
});
Games.belongsTo(Collection, {
});

User.hasMany(Comments,{
});

Comments.belongsTo(User,{

});

module.exports = {
    User,
    Games,
    Collection,
    Comments,
    Friends
}


