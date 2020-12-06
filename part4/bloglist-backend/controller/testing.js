const  express  = require("express")
const  {Blog} =require("../models/blog") 
const    {User}=require("../models/user")

const router = express.Router()

router.get("/reset",async (req,resp)=> {
  await User.deleteMany({})
  await Blog.deleteMany({})
  resp.status(200).end()
})


module.exports = router
