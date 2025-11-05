import { FaGlobe } from 'react-icons/fa6'
import { FaMugSaucer } from 'react-icons/fa6'
import Wrapper from '../assets/wrappers/Blog2_02'

const BlogStaticPage_02 = () => {
  return (
    <Wrapper>
      <section className='blogs'>
        <div className='section-title'>
          <h2>static blogs -- 李國蘋, 213410102</h2>
        </div>
        <div className='blogs-center'>
          <article className='blog'>
            <img
              src='/public/themes/theme_blogs/images/photo-1.jpg'
              alt='Coffee photo'
              className='img blog-img'
            />
            <div className='blog-content'>
              <span>
                lifestyle <FaMugSaucer />
              </span>
              <h3>seven reasons why coffee is awesome</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <a href='#'>read more</a>
            </div>
          </article>
          <article className='blog'>
            <img
              src='/public/themes/theme_blogs/images/photo-2.jpg'
              alt='Coffee photo'
              className='img blog-img'
            />
            <div className='blog-content'>
              <span>
                travel <FaGlobe />
              </span>
              <h3>travel to paris</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <a href='#'>read more</a>
            </div>
          </article>
          <article className='blog'>
            <img
              src='/public/themes/theme_blogs/images/photo-3.jpg'
              alt='Coffee photo'
              className='img blog-img'
            />
            <div className='blog-content'>
              <span>
                lifestyle <FaMugSaucer />
              </span>
              <h3>Coffee Brings Friendship</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <a href='#'>read more</a>
            </div>
          </article>
          <article className='blog'>
            <img
              src='/public/themes/theme_blogs/images/photo-4.jpg'
              alt='Coffee photo'
              className='img blog-img'
            />
            <div className='blog-content'>
              <span>
                lifestyle <FaMugSaucer />
              </span>
              <h3>Coffee Makes You Feel Good</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <a href='#'>read more</a>
            </div>
          </article>
        </div>
      </section>
    </Wrapper>
  )
}

export default BlogStaticPage_02
