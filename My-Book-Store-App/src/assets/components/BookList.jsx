import booksData from '../books.json';
import BookItem from './BookItem';
import React, { useState } from 'react';


function BookList() {
    const [cartItems, setCartItems] = useState([]);

    // Funktion för att lägga till en bok i korgen
    const addToCart = (book) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.title === book.title);
            if (existingItem) {
                // Om boken redan finns i korgen, öka antalet
                return prevItems.map((item) =>
                    item.title === book.title ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // Lägg till ny bok i korgen
                return [...prevItems, { ...book, quantity: 1 }];
            }
        });
    };

    return (
        <section className="book-list">
            <h1 className="book-list-title">Our Recommendation:</h1>
            <ul>
                {booksData.map((book, index) => (
                    <BookItem
                        key={index}
                        title={book.title}
                        author={book.author}
                        pages={book.pages}
                        genre={book.genre}
                        desc={book.desc}
                        addToCart={() => addToCart(book)} // Skicka addToCart som prop
                    />
                ))}
            </ul>
        </section>
    );
}

export default BookList;