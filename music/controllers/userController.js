const express = require('express')
const req = express.request
const res = express.response
const {http} = require("../utils");
const User = require('../models/User')
const getUsers = async (req, res, next) => {
    if(Object.keys(req.query).length) {
        const {
            userName,
            gender
        } = req.query

        const filter = []
        if(userName){filter.push(userName)}
        if(gender){filter.push(gender)}
        for(const query of filter ) {
            console.log(`Searching user by: ${query}`)
        }
    }
    try{
        const result  = await User.find()
        res.status(http.good.ok)
            .setHeader('Content-Type', 'application/json')
            .json(result)
    } catch(err) {
        next(err)
    }

}

const createUser = async(req, res, next) => {
    try{
        const result  = await User.create(req.body)
        res.status(http.good.created)
            .setHeader('Content-Type', 'application/json')
            .json(result)
    } catch(err) {
        next(err)
    }

}

const deleteUsers = async(req, res, next) => {
    try{
        const result  = await User.deleteMany(req.body)
        res.status(http.good.noContent)
            .setHeader('Content-Type', 'application/json')
            .json(result)
    } catch(err) {
        next(err)
    }
}

const getUser = async(req, res, next) => {
    try{
        const result  = await User.findOne(req.body)
        res.status(http.good.ok)
            .setHeader('Content-Type', 'application/json')
            .json(result)
    } catch(err) {
        next(err)
    }

}

const putUser = async(req, res, next) => {
    try{
        const result  = await User.findOneAndReplace(req.body)
        res.status(http.good.ok)
            .setHeader('Content-Type', 'application/json')
            .json(result)
    } catch(err) {
        next(err)
    }
}

const deleteUser = async(req, res, next) => {
    try{
        const result  = await User.deleteOne(req.body)
        res.status(http.good.noContent)
            .setHeader('Content-Type', 'application/json')
            .json(result)
    } catch(err) {
        next(err)
    }
}

module.exports = {
    getUsers,
    createUser,
    deleteUsers,
    getUser,
    putUser,
    deleteUser
}