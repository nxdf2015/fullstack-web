require('dotenv').config()


const { PASSWORD , PORT , NODE_ENV ,SALT,SECRET} = process.env

 

module.exports = { PASSWORD ,PORT,NODE_ENV,SALT,SECRET}