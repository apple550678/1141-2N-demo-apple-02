import './App_02.scss'
import books_data from './booklist_data2'

console.log('books_data', books_data)

const App_02 = () => {
  return (
    <section className='booklist'>
      {books_data.map((book) => {
        return (
          <article className='book'>
            <img src={book.img} />
            <div className='bookinfo'>
              <h1>{book.title}</h1>
              <h4>{book.author}</h4>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default App_02
