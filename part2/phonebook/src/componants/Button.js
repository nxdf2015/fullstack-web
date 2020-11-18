import React from 'react'


const Button = ({name,...props}) => <button {...props}>{name}</button>


export default Button