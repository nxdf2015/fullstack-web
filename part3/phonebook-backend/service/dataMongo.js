 
const { Person } = require("../model");

// const getId = () => Math.floor( Math.random() * 1000)

const addOne =  (person ) =>  new Person(person).save()
   

const getAll = async () => {
  const response = await Person.find({});
  return response
};

getCount = async () => {
  const count = await Person.find({}).estimatedDocumentCount()
  return response 
}

// const findById = (id) => persons.find((p) => p.id === id);

// const deleteOne = (id) => (persons = persons.filter((p) => p.id !== id));


module.exports = {getAll  , addOne  }