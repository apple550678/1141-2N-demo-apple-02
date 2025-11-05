import { useState } from 'react'
import blogData_02 from '../assets/data/blogData.json'
import Blog2_02 from '../components/Blog2_02'
import Wrapper from '../assets/wrappers/Blog2_02'
import Alert_02 from '../components/tutorials/Alert_02'

const BlogLocalJsonPage2_02 = () => {
  const [name, setName] = useState('李國蘋')
  const [id, setId] = useState(213410102)
  const [blogs_02, setBlogs_02] = useState(blogData_02)
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  })

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type })
  }

  const removeItem = (id) => {
    showAlert(true, 'blog removed', 'danger')
    setBlogs_02(blogs_02.filter((blog) => blog.id !== id))
  }

  const clearAllBlogs = () => {
    showAlert(true, 'clear all blogs', 'danger')
    setBlogs_02([])
  }

  const loadAllBlogs = () => {
    showAlert(true, 'load all blogs', 'success')
    setBlogs_02([])
    setBlogs_02(blogData_02)
  }
  return (
    <Wrapper>
      {alert.show && <Alert_02 alert={alert} showAlert={showAlert} />}
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            blogs from local json 2 -- {name}, {id}
            {''}
          </h2>
        </div>
        <div className='blogs-center'>
          {blogs_02.map((item) => {
            const { id, title, descrip, category, img } = item
            return (
              <Blog2_02
                key={id}
                id={id}
                title={title}
                descrip={descrip}
                category={category}
                img={img}
                removeItem={removeItem}
              />
            )
          })}
        </div>
        <div className='flex justify-center items-center gap-8 mt-8'>
          <button
            type='button'
            className='text-red-700 bg-red-200 hover:bg-red-300 capitalize px-4 py-2 text-base rounded'
            onClick={clearAllBlogs}
          >
            clear all blogs
          </button>
          <button
            type='button'
            className='text-blue-700 bg-blue-200 hover:bg-blue-300 capitalize px-4 py-2 text-base rounded'
            onClick={loadAllBlogs}
          >
            load all blogs
          </button>
        </div>
      </section>
    </Wrapper>
  )
}

export default BlogLocalJsonPage2_02
