const express = require("express")
const cors = require("cors")

const connectionDb = require("./database/connection")
const UserRoutes = require("./routes/user")
const ArtistRoutes = require("./routes/artist")
const AlbumRoutes = require("./routes/album")
const SongRoutes = require("./routes/song")
const swaggerDocs = require("./swagger")

const { PORT } = require("./config")

connectionDb()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/user", UserRoutes)
app.use("/api/artist", ArtistRoutes)
app.use("/api/album", AlbumRoutes)
app.use("/api/song", SongRoutes)

app.listen(PORT, () => {
  console.log(`Initialized server on port: ${PORT}`)
  swaggerDocs(app, PORT)
})