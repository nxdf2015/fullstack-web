let {persons } = require("../db")

const getId = () => Math.floor( Math.random() * 1000)

const addOne = (person ) => {
    console.log("add one")
    persons = [...persons,{...person,id:getId()}]}

const getAll = () => persons

const findById = id => persons.find(p => p.id === id )

const deleteOne = id => persons = persons.filter(p => p.id !== id )


module.exports = { addOne , getAll , findById , deleteOne }