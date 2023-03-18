const express = require('express')
const router = express.Router()
const {
    getSongs,
    createSong,
    deleteSongs,
    getSong,
    putSong,
    deleteSong
} = require('../controllers/songController')

router.route('/')
    .get(getSongs)
    .post(createSong)
    .delete(deleteSongs)

router.route('/:songID')
    .get(getSong)
    .put(putSong)
    .delete(deleteSong)

module.exports = router