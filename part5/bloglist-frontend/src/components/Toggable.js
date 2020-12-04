import React, { useState }  from "react";


const Toggable = ({children,logged }) => {
    const [ visible , setVisible ] = useState(false)
    if (!logged) {
        return null;
      }
    if (!visible){
        return (<button onClick={() => setVisible(!visible)}>add note</button>)
    }

    return children(setVisible)
}


export default Toggable