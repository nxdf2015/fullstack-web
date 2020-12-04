// import axios from 'axios'
import { client} from './client'
 

const getAll = () => {
  const data   =  client.get("/blogs" )
  return data.then(response => response.data)
}

const addOne = async (blog) => {
 const response = await  client({
    method:"post",
    url:"/blogs",
    data:blog
  })

  if (response.status === 200){
    return response.data
  }
  else {
    throw new Error(response.data)
  }
}


const updateOne = async  (id,likes) => {
  const blog  = await client({
    method:"patch",
    url:"/blogs/"+id,
    data:{likes}
  })

  return blog 
}

const deleteOne = async (id) => {
   await client.delete(`blogs/${id}`);

}
export default { getAll ,addOne ,updateOne ,deleteOne }