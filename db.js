const { Sequelize } = require("sequelize");
const DB_URL = process.env.DATABASE_URL || "postgres://localhost:5432/Songs";
const db = new Sequelize(DB_URL, { logging: false });

module.exports = db;
