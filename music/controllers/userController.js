const express = require('express')
const req = express.request
const res = express.response
const {http} = require("../utils");
const getUsers = (req, res, next) => {
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
    res.status(http.good.ok)
        .setHeader('Content-Type', 'application/json')
        .json({message: 'Here are the users.'})
}

const createUser = (req, res, next) => {
    res.status(http.good.created)
        .setHeader('Content-Type', 'application/json')
        .json({message: 'User created.'})
}

const deleteUsers = (req, res, next) => {
    res.status(http.good.noContent)
        .setHeader('Content-Type', 'application/json')
        .json()
}

const getUser = (req, res, next) => {

    res.status(http.good.ok)
        .setHeader('Content-Type', 'application/json')
        .json({message: `Here is the user with ID of ${req.params['userID']}.`})
}

const putUser = (req, res, next) => {
    res.status(http.good.ok)
        .setHeader('Content-Type', 'application/json')
        .json({message: `User with ID of ${req.params['userID']} modified.`})
}

const deleteUser = (req, res, next) => {
    res.status(http.good.noContent)
        .setHeader('Content-Type', 'application/json')
        .json()
}

module.exports = {
    getUsers,
    createUser,
    deleteUsers,
    getUser,
    putUser,
    deleteUser
}