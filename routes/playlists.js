const router = require('express').Router() 
const { Playlist } = require("../models")

router.get("/", async (req, res, next) => {
    try{
        const playlist = await Playlist.findAll()
        res.json(playlist)
    }catch(err){
        next(err)
    }
});

router.get("/:id", async (req, res, next) => {
    try{
        const id = Number(req.params.id)
        const playlist = await Playlist.findByPK(id)
        res.json(playlist) 
    }catch(err){
        next(err)
    }
});

router.post("/", async (req, res, next) => {
    try{
        const playlist = await Playlist.create(req.body)
        res.json(playlist)
    }catch(err){
        next(err)
    }
});

router.delete("/:id", async (req, res, next) => {
    try{
        const id = Number(req.params.id)
        const playlist = await Playlist.findByPK(id)
        res.json(playlist)
    }catch(err){
        next(err)
    }
});

module.exports = router 