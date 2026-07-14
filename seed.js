const { db, Song, Playlist } = require("./models");

async function seed() {
  await db.sync({ force: true });
  const allSongs = await Playlist.create({
    title: "All Songs",
    description: "All your music in one place",
  });
  const hipHop = await Playlist.create({
    title: "Hip-Hop",
    description: "Various hip-hop bangers",
  });
  const pop = await Playlist.create({
    title: "Pop",
    description: "Various pop bangers",
  });
  const songs = [
    {
      title: "Many Men",
      artist: "50 cent",
      // duration: 210,
      playlistId: hipHop.id,
    },
    {
      title: "Don't Stop 'Til You Get Enough",
      artist: "Michael Jackson",
      // duration: 240,
      playlistId: pop.id,
    },
    {
      title: "Welcome To The Party",
      artist: "Pop Smoke",
      // duration: 120,
      playlistId: hipHop.id,
    },
    { title: "Numb", artist: "Linkin Park" },
    { title: "Jesus Walks", artist: "Kanye West" },
  ];
  await Song.bulkCreate(songs);
  console.log("Seeded");
  process.exit();
}
seed();
