import axios from 'axios'

 
const url = `/api/persons`

const getAll =   () =>  axios.get(url)

const addOne = async  (person) => {

const response  = await axios({
    url,
    method: 'post',
    data : person ,
    headers:{
        contentType : "application/json"
    }
})

return response

}

const updateOne = async (id, person)=> {
  const response =  await  axios({
        url : `${url}/${id}`,
        method:'put',
        data: person
    })

  return response
}

const deleteOne = id => axios({
    url :`${url}/${id}`,
    method: "delete",
    
})

export { getAll , addOne ,deleteOne , updateOne}
