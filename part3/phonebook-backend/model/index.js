const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
    name : {
        type: String,
         
    },
    number : {
        type : Number
    }
})

const Person = mongoose.model('person',PersonSchema)


module.exports = { Person }