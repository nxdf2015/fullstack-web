const validate = (req,resp,next)=>  {
    const person = req.body
    
    if (!(person.name && person.number && !persons.find(p => p.name == person.name ))){
       if (!(person.name && person.number)){
           next({error : "name and  number required"})
       }
       else{
           next({error: "name must be unique"})
       }

    }
     
        next()
     
    
}


module.exports ={validate }