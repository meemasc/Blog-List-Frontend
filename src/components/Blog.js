import React, {useState} from 'react'
import blogService from '../services/blogs'


const Blog = ({blog, user, handleRemoveButton}) => {
  const [visible, setVisible] = useState(false)
  const [totalLikes, setTotalLikes] = useState(blog.likes)

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const isBlogThisUsers = () => {
    if (blog.user.username === user.username) {
      return true
    }
    return false
  }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const removeButtonStyle = {
    backgroundColor: '#00FFFF',
    display: isBlogThisUsers() ? '' : 'none'
  }

  const handleLikeButton = async () => {
    const newBlog = {
      ...blog,
      likes: totalLikes + 1
    }

    await blogService.update(blog.id, newBlog)
    setTotalLikes(totalLikes + 1)
  }

  

  const hiddenBlog = () => (
    <div>
      {blog.title + ' '}
      <button onClick={toggleVisibility}>view</button>
    </div>
  )

  const shownBlog = () => (
    <div>
      <div>
        {blog.title + ' '}
        <button onClick={toggleVisibility}>hide</button>
      </div>
      <div>{blog.url}</div>
      <div>
        {`likes ${totalLikes} `}
        <button onClick={handleLikeButton}>like</button>
      </div>
      <div>{blog.author}</div>
      <div >
        <button style={removeButtonStyle} onClick={handleRemoveButton(blog)}>remove</button>
      </div>
    </div>
  )

  return (
    <div style={blogStyle}>
      {visible ? shownBlog() : hiddenBlog()}
    </div>  
  )
}

export default Blog