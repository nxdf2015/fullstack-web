

const errorMiddleware = ({errors}, req, resp,next) => {
     
    let message = ""
    let type = ""
    
    if (errors.name){
        
        message += errors.name.message
        type = errors.name.name
         
    }

    if (errors.number) {
        if (message)
         message += ","
        message += errors.number.message
        type = errors.number.name
    }
    console.log(message)
    
    if (errors.message){
        message = errors.message
        type = "error"
    }

     
    resp.status(400).json({  type, message} );
  }


module.exports= errorMiddleware