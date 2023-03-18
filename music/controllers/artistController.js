const express = require('express')
const req = express.request
const res = express.response
const {http} = require("../utils");
const getArtists = (req, res, next) => {
    if(Object.keys(req.query).length) {
        const {
            firstName,
            lastName,
            genre
        } = req.query

        const filter = []
        if(firstName){filter.push(lastName)}
        if(lastName){filter.push(lastName)}
        if(genre){filter.push(genre)}
        for(const query of filter ) {
            console.log(`Searching artist by: ${query}`)
        }
    }
    res.status(http.good.ok)
        .setHeader('Content-Type', 'application/json')
        .json({message: 'Here are the artists.'})
}

const createArtist = (req, res, next) => {
    res.status(http.good.created)
        .setHeader('Content-Type', 'application/json')
        .json({message: 'Artist created.'})
}

const deleteArtists = (req, res, next) => {
    res.status(http.good.noContent)
        .setHeader('Content-Type', 'application/json')
        .json()
}

const getArtist = (req, res, next) => {

    res.status(http.good.ok)
        .setHeader('Content-Type', 'application/json')
        .json({message: `Here is the artist with ID of ${req.params['artistID']}.`})
}

const putArtist = (req, res, next) => {
    res.status(http.good.ok)
        .setHeader('Content-Type', 'application/json')
        .json({message: `Artist with ID of ${req.params['artistID']} modified.`})
}

const deleteArtist = (req, res, next) => {
    res.status(http.good.noContent)
        .setHeader('Content-Type', 'application/json')
        .json()
}

module.exports = {
    getArtists,
    createArtist,
    deleteArtists,
    getArtist,
    putArtist,
    deleteArtist
}