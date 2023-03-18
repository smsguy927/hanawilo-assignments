const express = require('express')
const router = express.Router()
const {
    getArtists,
    createArtist,
    deleteArtists,
    getArtist,
    putArtist,
    deleteArtist
} = require('../controllers/artistController')

router.route('/')
    .get(getArtists)
    .post(createArtist)
    .delete(deleteArtists)

router.route('/:artistID')
    .get(getArtist)
    .put(putArtist)
    .delete(deleteArtist)

module.exports = router