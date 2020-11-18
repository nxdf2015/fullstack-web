import axios from 'axios'

 
const url = `http://localhost:3001/persons`

const getAll =   () =>  axios.get(url)



export { getAll}
