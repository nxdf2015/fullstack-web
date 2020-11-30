const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userService = require("../services/user");
const { SECRET } = require("../utils/config");
 
const router = express.Router();


 

router.get("/me", (req, resp) => {
   
  if (req.token){
      resp.status(200).json({username : req.token.username})
  }
  else {
      throw new Error("not logged")
  }
   

});


router.post("/", async (req, resp) => {
  const { username, password } = req.body;

  if (!(username && password)) {
    throw new Error("username and password required");
  }

  const user = await userService.findOneByUserName(username);
 
  const result = await bcrypt.compare(password, user.password);
  
  if (result) {
    const token = jwt.sign({ username:user.username , id: user.id }, SECRET)
    resp.status(200).json({ token });
  } else {
    resp.status(400).send("invalid password");
  }

});

module.exports = router;
