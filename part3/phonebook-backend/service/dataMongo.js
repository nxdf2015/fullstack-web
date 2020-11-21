 
const { Person } = require("../model");

// const getId = () => Math.floor( Math.random() * 1000)

const addOne =  (person ) =>  new Person(person).save()
   

const getAll = async () =>  Person.find({});
  
 
const findById = (id) => Person.findOne({id})

const deleteOne = (id) =>  Person.findByIdAndDelete(id)
 
const updateOne = (id,person) =>  Person.findByIdAndUpdate(id  ,person , {new : true})

module.exports = {getAll  , addOne  ,findById, deleteOne ,updateOne} 