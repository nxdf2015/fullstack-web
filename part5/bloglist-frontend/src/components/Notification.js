import React, { useEffect, useState } from 'react'

const Notification= ({type,message }) => {
    const [visible,setVisible] = useState(false)
    let id 
    useEffect(()=> {
     
     setVisible(true)
    }, [message])
    if (message === ""){
        return null
    }
    
    if (id){
         clearTimeout(id)
         id=undefined 
     }
     
   id = setTimeout(() => setVisible(false),2000)
      return <div>
          {visible && <div className={`notification ${type}`}>{message}</div>}
      </div>
}


export default Notification