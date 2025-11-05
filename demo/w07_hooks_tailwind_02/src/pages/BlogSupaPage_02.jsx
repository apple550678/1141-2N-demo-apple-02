import { useEffect, useState } from 'react'
import Blog_02 from '../components/Blog_02'
import { supabase } from '../db/clientSupabase'
import Wrapper from '../assets/wrappers/Blog2_02'

const BlogSupaPage_02 = () => {
  const [name] = useState('李國蘋')
  const [id] = useState(213410102)
  const [blogs_02, setBlogs_02] = useState([])

  const fetchBlogsFromSupa = async () => {
    try {
      const { data, error } = await supabase.from('blog_02').select('*')
      if (error) throw error
      setBlogs_02(data ?? [])
      console.log('blogs_supabase:', data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchBlogsFromSupa()
  }, [])

  return (
    <Wrapper>
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            Blogs From Supabase -- {name}, {id}
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

export default BlogSupaPage_02
