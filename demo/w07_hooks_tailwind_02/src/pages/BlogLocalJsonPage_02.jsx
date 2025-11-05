import { useState } from 'react'
import blogData_02 from '../assets/data/blogData.json'
import Blog_02 from '../components/Blog_02'
import Wrapper from '../assets/wrappers/Blog2_02'

const BlogLocalJsonPage_02 = () => {
  const [name, setName] = useState('李國蘋')
  const [id, setId] = useState(213410102)
  const [blogs_02, setBlogs_02] = useState(blogData_02)
  return (
    <Wrapper>
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            blogs from local json -- {name}, {id}
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

export default BlogLocalJsonPage_02
