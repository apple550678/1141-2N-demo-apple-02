import Wrapper from '../assets/wrappers/BookList_02'
import data from '../assets/data/booklist_data2'

// align with teacher screenshot: log data at module top-level
console.log('data', data)

const BookListPage_02 = () => {
  return (
    <Wrapper>
      <section className='booklist'>
        {data.map((book) => {
          return (
            <article key={book.id} className='book'>
              <img src={book.img} />
              <div className='bookinfo'>
                <h1>{book.title}</h1>
                <h4>{book.author}</h4>
              </div>
            </article>
          )
        })}
      </section>
    </Wrapper>
  )
}

export default BookListPage_02
