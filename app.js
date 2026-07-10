const express = require('express');
const app = express();
const PORT = 6000;
const db = require('./db');
const playlistRouter = require('./routes/playlists');
const songsRouter = require('./routes/songs');

app.use('./playlists', playlistRouter);
// app.use('./songs', songsRouter);

app.use(express.json())

async function startApp() {
  await db.sync();

  app.listen(PORT, () => console.log(`The server is running on ${PORT}`));
}

startApp();

