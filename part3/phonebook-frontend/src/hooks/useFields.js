import { useState } from 'react'

const useField = (type = 'text') => {
    const [ value , setValue ] = useState("")
  
    const handleChange = ({target}) => setValue(target.value)
    const reset = () => setValue("")
    return { type , value , onChange : handleChange ,reset}
  }

  export default useField