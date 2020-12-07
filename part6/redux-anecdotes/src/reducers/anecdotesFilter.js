const reducer = (state={filter : null },action) => {
    switch(action.type){
        case "filter":
            return { filter : action.filter}

        default:
            return state 
    }
}


export default reducer


