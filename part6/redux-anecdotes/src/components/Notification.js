import React  from 'react'
import {useSelector } from 'react-redux'

const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  
  const {visible , message } = useSelector(state => state.notification)
   
  return ( visible && <div style={style}>  {message } </div>)
}

export default Notification