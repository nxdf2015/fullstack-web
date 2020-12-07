 import v4 from "uuid"

 
 const defaultState = {message : null,visible : false }

const reducer = (state=defaultState ,action) => {
    console.log(action,"notification reducer")
    switch(action.type){
        case "ADD":
            return { id : v4() ,  message : "add a new note : " + action.note, visible : false }
        case "VOTE":
            return { id : v4() , message : "vote for a note : " + action.note.content ,visible : false }
        case "SHOW":
                return { ...state , visible : true }
        case "REMOVE":
                return {...state , visible : false  }
        default:
            return {id : v4() , message: null ,visible : false}
    }
}


export default reducer