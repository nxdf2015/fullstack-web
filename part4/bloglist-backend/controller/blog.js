
const express = require('express')
const { request } = require('../app')
const router = express.Router()
 

const blogServices = require("../services/blogs")
const { authorization  } = require('../middleware/token')

router.get('/:id', async (request, response) => {
  const id = request.params.id
  const blog  = await blogServices.getOne(id).populate('user')
  

  response.json(blog)
})

router.get('/', async (request, response) => {
  const blogs  = await blogServices.getAll().populate('user')
 
  response.json(blogs)
})
 


router.post('/' , authorization ,  async  (request, response) => {
  const data = request.body
  const blog = await blogServices.create({...data,user : request.token.id })

  response.status(200).json(blog)
  
})

router.delete("/:id",authorization , async (request,response) => {
   const id = request.params.id
   const user_id = request.token.id
   const blog = await blogServices.deleteOne(id,user_id)
   
   response.status(200).json(blog)

})

router.patch("/:id",authorization , async (request,response) => {
  const {likes} = request.body
  const id = request.params.id 
 
  const blog = await blogServices.updateOne(id,likes)
   
  response.status(200).json(blog)

})

router.use((err,req,resp)=> {
  const errors= err.errors
  let result
  if (errors){
        if(errors.title){
            result = [...result ,   errors.title.message]
        }
        if(errors.url){
            result = [...result , errors.url.message]
        }}

  else {
    result = [err.message]
  }

  resp.status(400).json(result)
})


module.exports=router

