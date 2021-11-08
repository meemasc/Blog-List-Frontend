import React from 'react'
import Blog from './Blog'
import CreateNewBlog from './CreateNewBlog'
import blogService from '../services/blogs'

const LoggedUser = ({user, setUser, blogs, setBlogs, setMessage, setMessageColor}) => {

  const handleLogout = (event) => {
    window.localStorage.removeItem('loggedBlogappUser')
    blogService.setToken(null)
    setUser(null) 
  }

  return (
    <div>
      <h2>blogs</h2>
      <div>
        {`${user.name} logged in`} 
        <button onClick={handleLogout}>logout</button>
      </div>
      <br/>
      <CreateNewBlog blogs={blogs} setBlogs={setBlogs} setMessage={setMessage} setMessageColor={setMessageColor}/>
      <div>
        {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
      </div>
    </div>   
  )
}

export default LoggedUser