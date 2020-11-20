const { response } = require("express");
const express = require("express");
const morgan = require("morgan");
let { persons } = require("./db");

const app = express();
const port = 3001;

const getId = () => Math.floor( Math.random() * 1000)

const validate = (req,resp,next)=>  {
    const person = req.body
    if (!(person.name && person.number && !persons.find(p => p.name == person.name ))){
       if (!(person.name && person.number)){
           next({error : "name and  number required"})
       }
       else{
           next({error: "name must be unique"})
       }

    }
    next()
}

const router = express.Router();


router.get("/", (req, resp) => {
  return resp.json(persons);
});


router.get("/:id", (req, resp) => {
  const id = req.params.id;
  const person = persons.find((d) => d.id == Number(id));

  resp.status(200).json(person);
});


router.delete("/:id", (req, resp) => {
  const id = parseInt(req.params.id);
  const idPerson = persons.findIndex((p) => p.id == id);
  const person = persons[idPerson];
  persons = persons.slice(0, idPerson).concat(persons.slice(idPerson + 1));
  resp.status(200).json(person);
});

router.post("/", validate , (req, resp) => {
  const person = {...req.body,id:getId()};
  
  persons.push(person);

  resp.status(200).json(person)
});


app.use(express.json());

app.use(morgan(":method :url :status "));

app.use("/api/persons", router);

app.get("/info", function (req, resp) {
  const size = persons.length;
  const info = [`phonebook has info for ${size} persons`, new Date()].join("\n");

  return resp.status(200).send(info);
});

app.use((req, resp) => {
  resp.status(404).send("page not found");
});

app.use((err, req, resp,next) => {
  resp.status(200).send(err);
});

app.listen(port, () => console.log("listen on port 3001"));
