import axios from 'axios'


const getAll = async  () =>{
    
    const response = await axios.get("http://localhost:3001/anecdotes")
return response.data
}

 

const add =  data=>   axios({
    method: "post",
    url: "http://localhost:3001/anecdotes",
    data  
   
})

const vote = (id,votes) => axios({
    method: "patch",
    url:`http://localhost:3001/anecdotes/${id}`,
    data: { votes  }
})



export {getAll,add,vote }