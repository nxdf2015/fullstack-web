import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import Blog from "./components/Blog";
import Login from "./components/Login";
import CreateBlog from "./components/AddBlog";
import Notification from "./components/Notification";
import Toggable from "./components/Toggable";

import blogService from "./services/blogs";
import userService from "./services/user";

import "./App.css";

const useBlog = () => {
  const [blogs, set] = useState([]);
  const setBlogs = (blogs) => {
    blogs.sort((a, b) => (a.likes < b.likes ? 1 : -1));
    set(blogs);
  };
  return [blogs, setBlogs];
};
const App = () => {
  const [user, setUser] = useState(false);
  const [logged, isLogged] = useState(false);
  const [blogs, setBlogs] = useBlog();
  const [formVisible, setFormVisible] = useState(false);
  const [notification, setNotification] = useState({ type: "", message: "" });

  const notify = (notification) => {
    setNotification({ id: v4(), ...notification });
  };
  
  const setUpdate = () =>  blogService.getAll().then((blogs) => setBlogs(blogs));
  
  const submit = async (values) => {
    const blog = await blogService.addOne(values);
    if (blog) {
      notify({
        type: "success",
        message: `a new blog ${blog.title} by ${blog.author} added`,
      });
      setUpdate()
    } else {
      notify({
        type: "error",
        message: " error creation blog",
      });
    }
  };
  
  const handleLikes = async (id, likes) => {
    await blogService.updateOne(id, likes);
    const blogs = await blogService.getAll();
    setBlogs(blogs);
  };

  const deleteBlog = async (blog) => {
    try {
      await blogService.deleteOne(blog.id);
      const blogs = await blogService.getAll();
      notify({
        type: "success",
        message: `delete blog ${blog.title} by ${blog.author}`,
      });
      setBlogs(blogs);
    } catch (error) {
      notify({ type: "error", message: "can't remove blog" });
    }
  };

  const logUser = (logged) => {
    isLogged(logged);
    setFormVisible((status) => !status);
  };

  const logout = () => {
    localStorage.removeItem("token");
    isLogged(false);
  };

 

  useEffect(() => {
    const getToken = async () => {
      const user = await userService.getUser();
      if (user.username) {
        isLogged(true);
        setUser(user.username);
      }
    };
    getToken();
  }, [logged]);

  return (
    <div>
      <nav>
        <button
          onClick={() => {
            if (logged) {
              logout();
              notify({ type: "success", message: " logout" });
            } else {
              setFormVisible((status) => !status);
            }
          }}
        >
          {logged ? "logout" : "login"}
        </button>
      </nav>
      <Login
        visible={formVisible}
        logged={logged}
        isLogged={logUser}
        notify={notify}
      />
      {logged ? `${user} logged in` : "not logged "}
      <h2>blogs</h2>
      <Notification {...notification} />
      <Toggable logged={logged}>
        {(setVisible) => (
          <CreateBlog
            notify={notify}
            logged={logged}
            setUpdate={setUpdate}
            setVisible={setVisible}
            submit={submit}
          />
        )}
      </Toggable>
      <div data-id="container-blogs">
        {blogs.map((blog) => (
          <Blog
            user={user}
            key={blog.id}
            blog={blog}
            handleLikes={handleLikes}
            deleteBlog={deleteBlog}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
