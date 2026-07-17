const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000; //required for the cloud server
require("dotenv").config();
console.log(">>>>>>>>>>>>>>>>>>>>.", process.env.DATABASE_URL);

const { db } = require("./models");
const playlistRouter = require("./routes/playlists");
const songsRouter = require("./routes/songs");
const morgan = require("morgan");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(morgan());

async function logger(req, res, next) {
  await console.log("Checking request method", req.method, req.originalUrl);
  next();
}

app.use(logger);
app.use("/playlists", playlistRouter);
app.use("/songs", songsRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Something broke");
});

async function startApp() {
  await db.sync();
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
startApp();
