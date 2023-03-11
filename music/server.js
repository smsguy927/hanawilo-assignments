const bodyParser = require('body-parser')
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const category = require('./routes/category')
const artist = require('./routes/artist')
const song = require('./routes/song')
const user = require('./routes/user')

dotenv.config({path: './config/config.env'})
const app = express();

app.use(bodyParser.json())

app.use('/category', category)
app.use('/artist', artist)
app.use('/song', song)
app.use('/user', user)

const PORT = process.env.PORT || 5001

const server = app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})