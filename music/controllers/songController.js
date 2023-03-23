const express = require('express')
const req = express.request
const res = express.response
const {http} = require("../utils");
const Song = require('../models/Song')
const getSongs = async (req, res, next) => {
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
    try{
        const result  = await Song.find()
        res.status(http.good.ok)
            .setHeader('Content-Type', 'application/json')
            .json(result)
    } catch(err) {
        next(err)
    }

}

const createSong = async (req, res, next) => {
    try{
        const result = await Song.create(req.body)
        res.status(http.good.created)
            .setHeader('Content-Type', 'application/json')
            .json(result)
    } catch(err) {
        next(err)
    }

}

const deleteSongs = async (req, res, next) => {
    try{
        const result = await Song.deleteMany(req.body)
        res.status(http.good.noContent)
            .setHeader('Content-Type', 'application/json')
            .json(result)
            .then(() => console.log(result))
    } catch(err) {
        next(err)
    }
}

const getSong = async(req, res, next) => {
    try{
        const result = await Song.findOne(req.body)
        res.status(http.good.ok)
            .setHeader('Content-Type', 'application/json')
            .json(result)
    } catch(err) {
        next(err)
    }
}

const putSong = async(req, res, next) => {
    try {
        const result = await Song.updateOne(req.body)
        res.status(http.good.ok)
            .setHeader('Content-Type', 'application/json')
            .json(result)
    } catch (err) {
        next(err)
    }
}

const deleteSong = async(req, res, next) => {
    try{
        const result = await Song.deleteOne(req.body)
        res.status(http.good.noContent)
            .setHeader('Content-Type', 'application/json')
            .json(result)
            .then(() => console.log(result))
    } catch(err) {
        next(err)
    }

}

module.exports = {
    getSongs,
    createSong,
    deleteSongs,
    getSong,
    putSong,
    deleteSong
}