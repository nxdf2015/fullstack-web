import React from 'react'
import {useSelector ,useDispatch} from "react-redux"
import actions  from "../actions";
const AnecdoteList = (  ) => {
    let  anecdotes  = useSelector(state => state.anecdotes )
    const {filter} = useSelector(state => state.filter)

    if (filter){
      anecdotes = anecdotes.filter(anecdote => anecdote.content.startsWith(filter) )
    }
    
    anecdotes = anecdotes.sort((x,y) => x.votes < y.votes ? 1 : -1 )
    const dispatch = useDispatch()

    const vote = (id) => {
      let idTimeout
       if (idTimeout){
        clearTimeout(idTimeout)
        idTimeout = undefined
       }
        console.log('vote', id)
        dispatch(actions.vote(id))
        dispatch(actions.show())
       idTimeout =  setTimeout(() => dispatch(actions.remove()) ,2000)
      }
    
    return anecdotes.map(anecdote =>
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote)}>vote</button>
      </div>
    </div>
  )
    }
export default AnecdoteList