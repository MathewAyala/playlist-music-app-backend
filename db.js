console.log('>>>>>', process.env.DATABASE_URL)
require('dotenv').config()
const { Sequelize } = require('sequelize');
const db = new Sequelize( process.env.DATABASE_URL,
    { logging:false }
)

module.exports = db;