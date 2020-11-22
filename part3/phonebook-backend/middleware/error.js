

const errorMiddleware = ({errors}, req, resp,next) => {
     
    let response = {}
    if (errors.name){
       response.name = {
            name:errors.name.name,
            properties: errors.name.properties

        }
    }

    if (errors.number) {
        response.number = {
            name:errors.number.name,
            properties: errors.number.properties

        }
    }
    if (!Object.keys(response)){
        response = error.name
    }
     
    resp.status(200).json(response );
  }


module.exports= errorMiddleware