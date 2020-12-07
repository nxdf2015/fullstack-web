import React from 'react'
import { useDispatch  } from "react-redux";
import actions from "../actions"

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addNote = event => {
        event.preventDefault()
           const note = event.target.note.value
         dispatch(actions.add(note))
      }
return (<form onSubmit={addNote}>
<div><input  name="note"/></div>
<button>create</button>
</form>)
}


export default AnecdoteForm