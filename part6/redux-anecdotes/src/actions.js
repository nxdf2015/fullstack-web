

const vote  = (id) =>  ({ type : "VOTE" , id })


const add = (note)=> ({type : "ADD" , note })

export default { vote  ,add }