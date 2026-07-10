const {DataTypes}=require('sequelize')
const db = require('../db');

const Playlist = db.define('playlists', {
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT},
})

module.exports = Playlist;