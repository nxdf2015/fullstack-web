const {User} = require('../models/user')

const bcrypt = require("bcrypt")

const salt = 10
const create = async  ({name,username,password}) => {
  const hash = await  bcrypt.hash(password,salt )
  return  new User({name,username,password:hash }).save()
}

const getAll = () => User.find({},{password:0})


const findOneByUserName = username => User.findOne().where('username').eq(username)

module.exports={create , getAll , findOneByUserName}