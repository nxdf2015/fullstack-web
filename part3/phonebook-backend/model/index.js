const mongoose = require('mongoose')
const uniqueValidator = require("mongoose-unique-validator")

const PersonSchema = new mongoose.Schema({
    name : {
        type: String,
        minlength: 3,
        unique:true
    },
    number : {
        type : Number,
        
        validate:{
          validator:(value) => /\d{8,}/.test(value),
          type: 'number of digits'
        }
    }
})

PersonSchema.plugin(uniqueValidator)

PersonSchema.set("toJSON", {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
    },
  });

const Person = mongoose.model('person',PersonSchema)

module.exports = { Person }