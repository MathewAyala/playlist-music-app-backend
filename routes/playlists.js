const router = require("express").Router();
const { Playlists, Songs } = require("../models");

router.get("/", async (req, res, next) => {
  try {
    const playlist = await Playlists.findAll();
    res.json(playlist);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const playlist = await Playlists.findByPk(id, { include: Songs });
    if (!playlist) {
      return res.status(404).json({ error: "Playlist not found" });
    }
    res.json(playlist);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const playlist = await Playlists.create(req.body);
    res.json(playlist);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const playlist = await Playlists.findByPk(id);
    if (!playlist) {
      return res.status(404).json({ error: "Playlist not found" });
    }
    await playlist.destroy();
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

router.post("/:id/songs", async (req, res, next) => {
  try {
    const playlistId = Number(req.params.id);
    const song = await Songs.create({ ...req.body, playlistId });
    res.status(201).json(song);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
