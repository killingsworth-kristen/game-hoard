const sequelize = require('../config/connection');
const { User, Games, Collection } = require('../model');

const userSeedData = require('./User.json');
const gamesSeedData = require('./Games.json');
// const commentsSeedData = require('./Collection.json')
// const collectionSeedData = require('./Collection.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });

  for (const { id } of users) {
    const newCollection = await Collection.create({
      user_id: id,
    });
  }
  // for (const { id } of users) {
  //   const newComments = await Comments.create({
  //     user_id: id,
  //   });
  // }
  // for (const { id } of users) {
  //   const newFriends = await Friends.create({
  //     user_id: id,
  //   });
  // }

  for (const games of gamesSeedData) {
    const newgames = await Games.create({
      ...games,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();