import { FaGlobe } from 'react-icons/fa6'
import { FaMugSaucer } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Blog2_02 = ({ id, img, category, title, descrip, removeItem }) => {
  return (
    <article className='blog'>
      <img src={img} alt='Coffee photo' className='img blog-img' />
      <div className='blog-content'>
        <span className='flex'>
          {category}
          {category === 'lifestyle' ? (
            <FaMugSaucer className='ml-1' color='blue' size={14} />
          ) : (
            <FaGlobe className='ml-1' color='blue' size={14} />
          )}
        </span>
        <h3>{title}</h3>
        <p>{descrip}</p>
        <div className='flex justify-between items-center'>
          <Link to='#' className='inline-block'>
            read more
          </Link>
          <button
            type='button'
            className='text-red-700 bg-red-100  capitalize px-2 py-1  hover:bg-red-300 rounded'
            onClick={() => removeItem(id)}
          >
            delete
          </button>
        </div>
      </div>
    </article>
  )
}

export default Blog2_02
