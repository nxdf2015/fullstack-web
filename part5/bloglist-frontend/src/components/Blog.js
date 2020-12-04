import React, { useState } from "react";

const Details = ({
  id,
  title,
  url,
  likes,
  author,
  user,
  setVisible,
  handleLikes,
}) => {
  return (
    <div>
      <div>{title}</div>
      <div>{author}</div>
      <div>{url}</div>
      <button onClick={() => handleLikes(id, likes + 1)}>likes</button>
      {likes}
      <div>{user.name}</div>
      <button onClick={() => setVisible(false)}>hidde</button>
    </div>
  );
};
const Blog = ({ blog, handleLikes, deleteBlog :remove,user }) => {
  const [visible, setVisible] = useState(false);
  const deleteBlog = (id) => {
    if(window.confirm(`remove blog ${blog.title}`)){
      remove(id)
    }
       
  }
  return (
    <div className="blog">
      {visible ? (
        <Details setVisible={setVisible} handleLikes={handleLikes} {...blog} />
      ) : (
        <div>
          {blog.title} {blog.author}
          <button onClick={() => setVisible(true)}>show</button>{" "}
         { user === blog.user.name &&  <button onClick={() => deleteBlog(blog.id)}>remove</button> }
        </div>
      )}
    </div>
  );
};

export default Blog;
