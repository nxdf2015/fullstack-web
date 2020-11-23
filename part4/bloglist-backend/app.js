const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')

const blogController = require('./controller/blog')
const { PASSWORD } = require('./utils/config')


const url_db = `mongodb+srv://admin:${PASSWORD}@cluster0.llwdf.mongodb.net/<dbname>?retryWrites=true&w=majority`



mongoose.connect(url_db,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const app = express()





app.use(cors())
app.use(express.json())

app.use(blogController)

module.exports=app