const express = require('express')
const req = express.request
const res = express.response
const {http} = require("../utils");
const getSongs = (req, res, next) => {
    if(Object.keys(req.query).length) {
        const {
            songTitle,
            artist,
            genre
        } = req.query

        const filter = []
        if(songTitle){filter.push(songTitle)}
        if(artist){filter.push(artist)}
        if(genre){filter.push(genre)}
        for(const query of filter ) {
            console.log(`Searching song by: ${query}`)
        }
    }
    res.status(http.good.ok)
        .setHeader('Content-Type', 'application/json')
        .json({message: 'Here are the songs.'})
}

const createSong = (req, res, next) => {
    res.status(http.good.created)
        .setHeader('Content-Type', 'application/json')
        .json({message: 'Song created.'})
}

const deleteSongs = (req, res, next) => {
    res.status(http.good.noContent)
        .setHeader('Content-Type', 'application/json')
        .json()
}

const getSong = (req, res, next) => {

    res.status(http.good.ok)
        .setHeader('Content-Type', 'application/json')
        .json({message: `Here is the song with ID of ${req.params['songID']}.`})
}

const putSong = (req, res, next) => {
    res.status(http.good.ok)
        .setHeader('Content-Type', 'application/json')
        .json({message: `Song with ID of ${req.params['SongID']} modified.`})
}

const deleteSong = (req, res, next) => {
    res.status(http.good.noContent)
        .setHeader('Content-Type', 'application/json')
        .json()
}

module.exports = {
    getSongs,
    createSong,
    deleteSongs,
    getSong,
    putSong,
    deleteSong
}