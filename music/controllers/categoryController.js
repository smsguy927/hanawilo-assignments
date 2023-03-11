// For '/category' endpoints
const express = require('express')
const req = express.request
const res = express.response
const {http} = require("../utils");
const getCategories = (req, res, next) => {

    res.status(http.bad.user.iAmATeaPot)
        .setHeader('Content-Type', 'application/json')
        .json({message: 'Sorry, I can\'t brew coffee'})
}


module.exports = {
    getCategories,
}