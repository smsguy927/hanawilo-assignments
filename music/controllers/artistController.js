const express = require('express')
const req = express.request
const res = express.response
const {http} = require("../utils");
const getArtists = (req, res, next) => {

    res.status(http.good.ok)
        .setHeader('Content-Type', 'application/json')
        .json({message: 'Here are the artists.'})
}

const createArtist = (req, res, next) => {
    res.status(http.good.created)
        .setHeader('Content-Type', 'application/json')
        .json({message: 'Artist created.'})
}

const putArtist = (req, res, next) => {
    res.status(http.good.ok)
        .setHeader('Content-Type', 'application/json')
        .json({message: 'Artist modified.'})
}

const deleteArtist = (req, res, next) => {
    res.status(http.good.noContent)
        .setHeader('Content-Type', 'application/json')
        .json()
}

module.exports = {
    getArtists,
    createArtist,
    putArtist,
    deleteArtist
}