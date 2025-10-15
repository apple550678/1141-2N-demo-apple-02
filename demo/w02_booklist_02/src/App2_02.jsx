import './App_02.scss'
import books_data from './booklist_data2'

console.log('books_data', books_data)

const App2_02 = () => {
  return (
    <>
      <Booklist_02 />
    </>
  )
}

const Booklist_02 = () => {
  return (
    <section className='booklist'>
      {books_data.map((book) => {
        const { id, img, title, author } = book
        return <Book_02 key={id} img={img} title={title} author={author} />
      })}
    </section>
  )
}

const Book_02 = ({ img, title, author }) => {
  return (
    <article className='book'>
      <img src={img} />
      <div className='bookinfo'>
        <h1>{title}</h1>
        <h4>{author}</h4>
      </div>
    </article>
  )
}

export default App2_02
