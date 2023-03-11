const express = require('express')
const router = express.Router()
const {
    getArtists,
    createArtist,
    putArtist,
    deleteArtist
} = require('../controllers/artistController')

router.route('/')
    .get(getArtists)
    .post(createArtist)
    .put(putArtist)
    .delete(deleteArtist)

module.exports = router