import React, {useState} from 'react'
import blogService from '../services/blogs'

const CreateNewBlog = ({blogs, setBlogs, setMessage, setMessageColor}) => {
  const [blogTitle, setBlogTitle] = useState('') 
  const [blogAuthor, setBlogAuthor] = useState('') 
  const [blogUrl, setBlogUrl] = useState('')

  const handleBlogCreation = async (event) => {
    event.preventDefault()

    const blog = {
      title: blogTitle,
      author: blogAuthor,
      url: blogUrl
    }
    
    const newBlog = await blogService.create(blog)
    
    setBlogs(blogs.concat(newBlog))
    setBlogTitle('')
    setBlogAuthor('')
    setBlogUrl('')
    setMessageColor('green')
    setMessage(`a new blog ${newBlog.title} by ${newBlog.author} added`)
    setTimeout(() => {        
      setMessage(null)      
    }, 5000) 
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleBlogCreation}>        
        <div>          
          title:          
            <input            
            type="text"            
            value={blogTitle}            
            name="Title"            
            onChange={({ target }) => setBlogTitle(target.value)}          
            />        
        </div>        
        <div>          
          author:          
            <input            
            type="text"            
            value={blogAuthor}            
            name="Author"            
            onChange={({ target }) => setBlogAuthor(target.value)}          
            />        
        </div>   
        <div>          
          url:          
            <input            
            type="text"            
            value={blogUrl}            
            name="Url"            
            onChange={({ target }) => setBlogUrl(target.value)}          
            />        
        </div>      
        <button type="submit">create</button>
      </form> 
    </div>
  )
}


export default CreateNewBlog