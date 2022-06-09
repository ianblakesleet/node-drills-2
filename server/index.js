require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { PORT } = process.env

//importting/destructuring endpoint handlers from controller file
const { getInputs, createInput } = require('./controller')
//middleware
const app = express()
app.use(express.json())
app.use(cors())

//endPoints
app.get('/api/info', getInputs)
app.post('/api/info', createInput)

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))
