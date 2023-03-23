const express = require('express')
const req = express.request
const res = express.response
const {http} = require("../utils");
const Artist = require('../models/Artist')
const getArtists = async (req, res, next) => {
    if(Object.keys(req.query).length) {
        const {
            artistName,
            gender
        } = req.query

        const filter = []
        if(artistName){filter.push(artistName)}
        if(gender){filter.push(gender)}
        for(const query of filter ) {
            console.log(`Searching artist by: ${query}`)
        }
    }
    try{
        const result  = await Artist.find()
        res.status(http.good.ok)
            .setHeader('Content-Type', 'application/json')
            .json(result)
    } catch(err) {
        next(err)
    }

}

const createArtist = async(req, res, next) => {
    try{
        const result  = await Artist.create()
        res.status(http.good.created)
            .setHeader('Content-Type', 'application/json')
            .json(result)
    } catch(err) {
        next(err)
    }

}

const deleteArtists = async(req, res, next) => {
    try{
        const result  = await Artist.deleteMany()
        res.status(http.good.noContent)
            .setHeader('Content-Type', 'application/json')
            .json(result)
    } catch(err) {
        next(err)
    }
}

const getArtist = async(req, res, next) => {
    try{
        const result  = await Artist.findOne()
        res.status(http.good.ok)
            .setHeader('Content-Type', 'application/json')
            .json(result)
    } catch(err) {
        next(err)
    }

}

const putArtist = async(req, res, next) => {
    try{
        const result  = await Artist.findOneAndReplace()
        res.status(http.good.ok)
            .setHeader('Content-Type', 'application/json')
            .json(result)
    } catch(err) {
        next(err)
    }
}

const deleteArtist = async(req, res, next) => {
    try{
        const result  = await Artist.find()
        res.status(http.good.noContent)
            .setHeader('Content-Type', 'application/json')
            .json(result)
    } catch(err) {
        next(err)
    }
}

module.exports = {
    getArtists,
    createArtist,
    deleteArtists,
    getArtist,
    putArtist,
    deleteArtist
}