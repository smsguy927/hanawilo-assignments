const express = require('express')
const router = express.Router()
const {
    getSongs,
    createSong,
    putSong,
    deleteSong
} = require('../controllers/songController')

router.route('/')
    .get(getSongs)
    .post(createSong)
    .put(putSong)
    .delete(deleteSong)

module.exports = router