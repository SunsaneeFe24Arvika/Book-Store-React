import books from '../books.json'
import BookItem from './BookItem'
import React, { useState } from 'react';
    
function BookList() {
    const [data, setData] = useState([books]);
    
    
  return (
    <section className="book-list">
        <h1 className="book-list-title">Our Recomendation:</h1>
        <div>
            <ul>
                {books.map((book, index) => (
                <BookItem key={index} 
                title={book.title}
                author={book.author}
                pages={book.pages}
                genre={book.genre}
                desc={book.desc} />
                ))}
            </ul>
        </div>
    </section>
  )
}

export default BookList