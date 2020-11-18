import { useState } from 'react'

const useField = (type = 'text') => {
    const [ value , setValue ] = useState("")
  
    const handleChange = ({target}) => setValue(target.value)
  
    return { type , value , onChange : handleChange }
  }

  export default useField