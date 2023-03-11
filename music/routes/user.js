const express = require('express')
const router = express.Router()
const {
    getUsers,
    createUser,
    putUser,
    deleteUser
} = require('../controllers/UserController')

router.route('/')
    .get(getUsers)
    .post(createUser)
    .put(putUser)
    .delete(deleteUser)

module.exports = router