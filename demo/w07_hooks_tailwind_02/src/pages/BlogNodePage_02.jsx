import { useState, useEffect } from 'react'
// import blogData_02 from '../assets/data/blogData.json'
import Blog_02 from '../components/Blog_02'
const api_url = 'http://localhost:5000/api/blog_02'
import Wrapper from '../assets/wrappers/Blog2_02'

const BlogNodePage_02 = () => {
  const [name, setName] = useState('李國蘋')
  const [id, setId] = useState(213410102)
  const [blogs_02, setBlogs_02] = useState([])

  const fetchBlogFromNodeServer = async () => {
    try {
      const response = await fetch(api_url)
      const data = await response.json()
      console.log('blogs', data)
      setBlogs_02(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchBlogFromNodeServer()
  }, [])

  return (
    <Wrapper>
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            blogs from Node -- {name}, {id}
            {''}
          </h2>
        </div>
        <div className='blogs-center'>
          {blogs_02.map((item) => {
            const { id, title, descrip, category, img } = item
            return (
              <Blog_02
                key={id}
                id={id}
                title={title}
                descrip={descrip}
                category={category}
                img={img}
              />
            )
          })}
        </div>
      </section>
    </Wrapper>
  )
}

export default BlogNodePage_02
