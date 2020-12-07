

const vote  = (note) =>  ({ type : "VOTE" , note })


const add = (note)=> ({type : "ADD" , note })

const show = () => ({type : "SHOW"})

const remove = () => ({type : "REMOVE"}) 

export default { vote  ,add , show, remove }