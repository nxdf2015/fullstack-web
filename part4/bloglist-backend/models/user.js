const mongoose = require('mongoose')
const bcrypt = require("bcrypt")
const uniqueValidator = require('mongoose-unique-validator')
const {SALT} =require("../utils/config")

const userSchema = new mongoose.Schema({
    name:{
        type: String,
         
    },
    username:{
        type: String,
        required:true,
        unique:true,
        minlength:[3,"must minimun 3 charaters length"]

    },
    password:{
        type: String,
        required:true
    },

})

userSchema.plugin(uniqueValidator)

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      /* eslint-disable --  mutate object*/  
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
      /* eslint-enable */
    },
  })


const User = mongoose.model("user",userSchema)


module.exports= {User }