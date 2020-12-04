// import axios from 'axios'

import {client} from "./client"

const getUser = async () => {
    
    const user = await  client.get("/login/me")
    console.log(user);
    return user.data
   }
  

const logUser = async ({username,password}) =>  {
    const response  = await client({
        method:"post",
        url:"/login",
        data:{username,password}
    })
   
    return response.status === 200 && response.data

}



export default { getUser, logUser}