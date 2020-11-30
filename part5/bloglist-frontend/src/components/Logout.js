import React from 'react'

const Logout = ({isLogged}) => {
    const handleClick = () => {
        localStorage.removeItem('token')
        isLogged(false)
    }
  return  <button onClick={handleClick}>logout</button>
}


export default Logout