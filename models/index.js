const Playlists = require('./Playlists');
const Songs = require('./Songs');
const db = require('../db');

Songs.hasMany(Playlists);
Playlists.belongsTo(Songs);

module.exports = {db, Songs, Playlists}