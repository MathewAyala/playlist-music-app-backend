const {DataTypes}=require('sequelize')
const db = require('../db');

const Song = db.define('songs', {
    title: {type: DataTypes.STRING, allowNull: false},
    artist: {type: DataTypes.STRING, allowNull: false},
})

module.exports = Song ;