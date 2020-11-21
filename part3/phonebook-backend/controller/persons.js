const express = require("express")
require("express-async-errors")
const router = express.Router();

// const servicePerson = require("../service/data")
const servicePerson = require("../service/dataMongo")

const {validate} = require('../middleware/validation')

 
//const {persons } = require("../db")
router.get("/", async (req, resp) => {
    const persons = await servicePerson.getAll()
  return resp.json(persons);
});


router.get("/:id", (req, resp) => {
  const id = parseInt(req.params.id);

  const person = servicePerson.findById(id)

  resp.status(200).json(person);
});

router.put("/:id", async (req,resp)=>{
  const id = req.params.id   
  const response = await servicePerson.updateOne(id,req.body)

  resp.status(200).status(200).json(response)
})

router.delete("/:id", async (req, resp) => {
  const id = req.params.id;

  const person = await servicePerson.deleteOne(id)

  resp.status(200).json(person);
});

router.post("/" ,   (req, resp) => {
  const person = req.body
  servicePerson.addOne(person)

  resp.status(200).json(person)
});


module.exports = router 