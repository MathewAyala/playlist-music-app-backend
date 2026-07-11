const { db, Song, Playlist } = require("./models");

async function seed() {
  await db.sync({ force: true });
  const hipHop = await Playlist.create({
    title: "Hip-Hop",
    description: "Various hip-hop bangers",
  });
  const pop = await Playlist.create({
    title: "Pop",
    description: "Various pop bangers",
  });
  const songs = [
    { title: "Many Men", artist: "50 cent", playlistId: hipHop.id },
    { title: "Don't Stop 'Til You Get Enough", artist: "Michael Jackson", playlistId: pop.id  },
    { title: "Welcome To The Party", artist: "Pop Smoke", playlistId: hipHop.id  },
    { title: "Numb", artist: "Linkin Park"  },
    { title: "Jesus Walks", artist: "Kanye West", playlistId: hipHop.id  },
  ];
  await Song.bulkCreate(songs);
  console.log("Seeded");
  process.exit();
}
seed();
