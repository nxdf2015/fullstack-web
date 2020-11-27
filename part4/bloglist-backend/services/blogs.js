const { Blog} = require('../models/blog')

const getAll = () => Blog.find({})

const getOne = id => Blog.findOne({_id : id })

const create = blog => new Blog(blog).save()

const deleteOne  = id => Blog.findOneAndDelete({_id : id })

const updateOne = (id,likes) => Blog.findOneAndUpdate({_id : id} ,{likes } ,{new:true,upsert:true ,runValidators:true})
module.exports={getAll,create,deleteOne,getOne ,updateOne} 