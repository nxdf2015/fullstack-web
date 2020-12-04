const monggose = require('mongoose')
const express = require('express')
require("express-async-errors")
const cors = require('cors')
const morgan = require("morgan")
const { NODE_ENV} = require("dotenv")

const {extractToken   } = require("./middleware/token")

require('./utils/configDB')

const errorMiddleware = require("./middleware/error")

const blogController = require('./controller/blog')
const userController = require("./controller/user")
const loginController = require("./controller/login")

const app = express()

morgan.token('body' , function(req,res) {

   if (Object.keys(req.body).length )
      return JSON.stringify(req.body || "")
})

if (NODE_ENV == "DEVELOPMENT")
   app.use(morgan(":method :url :status :body"))
   
app.use(cors())
app.use(express.json())
app.use(extractToken )
if (NODE_ENV === "test"){
   const   testingController =require('./controller/testing')
   app.use(testingController)
}

app.use("/api/blogs" , blogController)
app.use("/api/users", userController)
app.use("/api/login",loginController)

app.use(errorMiddleware)
module.exports=app