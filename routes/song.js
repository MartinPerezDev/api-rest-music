const express = require("express")
const SongController = require("../controllers/song")
const check = require("../middlewares/auth")
const multer = require("multer")

const router = express.Router()

//config multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./uploads/songs"),
  filename: (req, file, cb) => cb(null, `song-${Date.now()}-${file.originalname}`)
})
const uploads = multer({ storage })

router.post("/save", check.auth, SongController.save)
router.get("/one/:id", check.auth, SongController.one)
router.get("/list/:albumId", check.auth, SongController.list)
router.put("/update/:id", check.auth, SongController.update)
router.delete("/remove/:id", check.auth, SongController.remove)
router.post("/upload/:id", [check.auth, uploads.single("file0")], SongController.uploadSong)
router.get("/audio/:file", SongController.audio)

module.exports = router