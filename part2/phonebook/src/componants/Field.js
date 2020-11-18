import React from 'react'

import useField from '../hooks/useFields'

const Field = ({name}) => {
    const field = useField()
 
    return <div>
        <label>
        {name}
        <input name={name} {...field}/>
        </label>
        </div>
}

export default Field