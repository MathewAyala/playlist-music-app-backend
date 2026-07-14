const { Sequelize } = require("sequelize");
const DB_API = process.env.DATABASE_URL || "postgres://localhost:5432/Songs";
const db = new Sequelize(DB_API, { logging: false });

module.exports = db;
