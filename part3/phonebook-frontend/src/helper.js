import { v4 } from "uuid";


const setId = data => data ? ({...data , id : v4() }) : v4()

export { setId}


