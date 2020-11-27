const mongoose = require("mongoose")

 const validUser = (req,resp,next) => {

    if (req.body.password.length < 3){
        const error = new Error("min length of password is 3")
        error.name="validationError"
        throw error
    }
    else {
        next()
    }
 }


 module.exports = {validUser}