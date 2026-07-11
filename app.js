const express = require("express");
const app = express();
const PORT = 6000;
const { db } = require("./models");
const playlistRouter = require("./routes/playlists");
const songsRouter = require("./routes/songs");

app.use(express.json());

async function logger(req, res, next) {
  await console.log("Checking request method", req.method, req.originalUrl);
  next();
}
app.use(logger);
app.use("/playlists", playlistRouter);
app.use("/songs", songsRouter);

async function startApp() {
  await db.sync();
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
startApp();
