const Sequelize = require('sequelize');
require('dotenv').config();
const cloudinary = require(`cloudinary`).v2;

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
  // ===============================================================
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    
    // "game_hoard_db",
    // "root",
    // "password",
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}
// ====================================================================

const cloudinaryConfig = cloudinary.config({
    cloud_name: process.env.CLOUDNAME,
    api_key: process.env.CLOUDAPIKEY,
    api_secret: process.env.CLOUDSECRET,
    secure: true,
  })

module.exports = sequelize;
