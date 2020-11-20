const { response } = require("express")
const morgan = require("morgan")


morgan.token("body", function(req,res) {
    if (Object.keys(req.body).length)
    return JSON.stringify(req.body)
    
    return "-"
     
})

 

morgan.format("log",":method :url :status :res[content-length] - :response-time ms  :body")


module.exports = morgan 