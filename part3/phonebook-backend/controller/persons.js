const express = require("express")

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

router.post("/" ,   async (req, resp) => {
  const person = req.body
  const response = await servicePerson.addOne(person)

  resp.status(200).json(response)
});


module.exports = router 