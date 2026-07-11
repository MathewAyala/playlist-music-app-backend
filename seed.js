const {db, Songs, Playlists} = require('./models');

const songs = [
    {title: "Many Men", artist: "50 cent"},
    {title: "Don't Stop 'Til You Get Enough", artist: "Michael Jackson"},
    {title: "Welcome To The Party", artist: "Pop Smoke"},
    {title: "Numb", artist: "Linkin Park"},
    {title: "Jesus Walks", artist: "Kanye West"},
]

const playlists = [
    {title: "Hip-Hop", description: "Various hip-hop bangers"},
]

async function seed(){
    await db.sync({force:true});
    await Songs.bulkCreate(songs);
    await Playlists.bulkCreate(playlists);
    console.log("Seeded");
    process.exit()
}
seed();