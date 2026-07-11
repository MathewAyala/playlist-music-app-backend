const Playlist = require('./Playlist');
const Song = require('./Song');
const db = require('../db');

Playlist.hasMany(Song);
Song.belongsTo(Playlist);

module.exports = {db, Song, Playlist}