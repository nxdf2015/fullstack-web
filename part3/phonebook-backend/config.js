 
require("dotenv").config()

const PASSWORD = process.env.PASSWORD
const PORT = process.env.PORT || 3001 
module.exports={ PORT, PASSWORD }