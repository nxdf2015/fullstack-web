const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
    name : {
        type: String,
         
    },
    number : {
        type : Number
    }
})

PersonSchema.set("toJSON", {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
    },
  });

const Person = mongoose.model('person',PersonSchema)


module.exports = { Person }