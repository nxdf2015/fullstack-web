const { response } = require("express");
const express = require("express");
const errorMiddleware = require("./middleware/error")
const cors = require("cors")
require("express-async-errors")

const morgan = require("./log");


const personsRouter = require("./controller/persons")


require("./configDb")

const app = express();

const  { PORT  } = require('./config')




app.use(express.json());

app.use(morgan("log"));

app.use(express.static("build"))

app.use("/api/persons", personsRouter);

// app.get("/info", function (req, resp) {
//   const size = persons.length;
//   const info = [`phonebook has info for ${size} persons`, new Date()].join("\n");

//   return resp.status(200).send(info);
// });

app.use((req, resp) => {
  resp.status(404).send("page not found");
});

app.use(errorMiddleware);

app.listen(PORT, () => console.log("listen on port 3001"));
