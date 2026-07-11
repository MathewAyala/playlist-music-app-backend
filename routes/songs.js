const router = require("express").Router();
const { Song } = require("../models");

router.get("/", async (req, res, next) => {
  try {
    const songs = await Song.findAll();
    res.json(songs);
  } catch (err) {
    next(err);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const song = await Song.findByPk(id);
    if (!song) {
      return res.status(404).json({ error: "Song not found" });
    }
    res.json(song);
  } catch (err) {
    next(err);
  }
});
router.patch("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const song = await Song.findByPk(id);
    if (!song) {
      return res.status(404).json({ error: "Song not found" });
    }
    await song.update(req.body);
    res.status(200).json(song);
  } catch (err) {
    next(err);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const song = await Song.findByPk(id);
    if (!song) {
      return res.status(404).json({ error: "Song not found" });
    }
    await song.destroy();
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
