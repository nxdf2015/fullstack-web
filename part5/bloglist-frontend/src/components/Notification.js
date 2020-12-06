import React, { useEffect, useState } from 'react'

const Notification= ({id, type,message }) => {
    const [visible,setVisible] = useState(false)
    let idTimeOut
    useEffect(()=> {
     
     setVisible(true)
    }, [id])
    console.log(message,type)
    if (message === ""){
        return null
    }
    
    if (idTimeOut){
         clearTimeout(idTimeOut)
         idTimeOut=undefined 
     }
     
   idTimeOut = setTimeout(() => setVisible(false),2000)
      return <div>
          {visible && <div className={`notification ${type}`}>{message}</div>}
      </div>
}


export default Notification