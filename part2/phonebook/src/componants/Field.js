import React from 'react'

import useField from '../hooks/useFields'

const Field = ({name}) => {
    const field = useField()
 
    return <input name={name} {...field}/>
}

export default Field