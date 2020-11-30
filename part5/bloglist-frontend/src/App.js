import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Login from "./components/Login"
import CreateBlog from "./components/AddBlog"
import Notification from './components/Notification'

import blogService from './services/blogs'
import userService from "./services/user"

import "./App.css"
const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user , setUser ] = useState(false)
  const [logged , isLogged] = useState(false)
  const [formVisible, setFormVisible] = useState(false)
  const [update,setUpdate] = useState(false)
  const [notification , setNotification] = useState({type:"",message:""})

  const notify = (notification) => {
        setNotification(notification)
  }
  
  const logUser = (logged) =>{
     isLogged(logged)
     setFormVisible(status => !status)
  }

  const logout = () => {
    localStorage.removeItem("token")
    isLogged(false)
  }

   
  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    ) 
     
  }, [update])

  
  useEffect(() => {
    const getToken = async () => {
      const user = await  userService.getUser()
      if(user.username){
        
        isLogged(true)
        setUser(user.username)
      }
     }
   getToken()
  },[logged])

   

  return (
    <div>
      <nav>
        <button onClick={() => {
          if (logged){
            logout()
            notify({type:"success",message:" logout"})
          }
          else {
            setFormVisible(status => !status)}
          }
          }>
            {logged ? "logout" : "login"}</button>  
        
      </nav>
      <Login visible={formVisible} logged={logged} isLogged={logUser} notify={notify}/>
      {logged ?  `${user} " logged in" ` : "not logged "} 
      <h2>blogs</h2>
      <Notification  {...notification} />
      <CreateBlog notify={notify} logged={logged} setUpdate={setUpdate}/>  
      {}
      {blogs.map(blog =>
        <Blog  key={blog.id} blog={blog} />
      )}
    </div>
  )
}

export default App