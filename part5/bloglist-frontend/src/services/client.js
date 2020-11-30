import axios from "axios"


const client = axios.create({


    baseURL : "/api",
    headers:{
        "content-type": "application/json"
    }
})

client.defaults.validateStatus= status => status >= 200 && status <= 400


client.interceptors.request.use(function(request){
    if (localStorage.getItem("token")){
        const token = localStorage.getItem("token")

        request.headers.authorization = `Bearer ${token}`
        
    }
    return request
})



export { client }