import React from 'react'

import AnecdoteList from "./components/AnecdoteList"
import AnecdoteForm from "./components/AnecdoteForm"
import Notification from "./components/Notification"
import Filter from "./components/AnecdoteFilter" 

const App = () => {
  
  return (
    <div>
      <Filter/>
      <Notification/>
      <h2>Anecdotes</h2>
      <AnecdoteList/>
      <h2>create new</h2>
     <AnecdoteForm/>
    </div>
  )
}

export default App