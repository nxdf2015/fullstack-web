const express = require('express')

const userService = require("../services/user")
const {validUser} = require("../middleware/validation")

const router = express.Router()
const {User} = require("../models/user")

router.get('/',async (req,res)=> {
    const users = await userService.getAll()

    res.json(users)
})



router.post('/',validUser , async (req,res)=> {
    const user = req.body
    const result = await userService.create(user)

    res.json(result)
})

// router.get("/:username",async (req,resp )=> {
//     const username =  req.params.username

//     const user = await User.findOne().where('username').eq(username)

//     resp.status(200).json(user)
// })


router.use((err, req,resp,next) => {
    let  result = []
    console.log(err.errors,"--------------------------")
    if (err.errors){
        const errors = err.errors
        if(errors.username){
            result = [...result ,errors.username.message]
        }
        
    }

    else { 
        
        result = [...result , err.message]
    }

console.log("errror user " , result)
    resp.status(400).json(result.join(","))

    

  
    
})

module.exports=router