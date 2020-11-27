const errorMiddleware = (err,request,response, next) => {
     
     
    response.status(400).json(err.message)
 }


 module.exports = errorMiddleware