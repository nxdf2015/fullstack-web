

const vote  = (note) =>  ({ type : "VOTE" , note })


const add = (note)=> ({type : "ADD" , note })

const show = () => ({type : "SHOW"})

const remove = () => ({type : "REMOVE"}) 

const init = (notes) => ({type : "INIT" , notes })

export default { vote  ,add , show, remove,init  }