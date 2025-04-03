import booksData from '../books.json';
import BookItem from './BookItem';
import React, { useState, useEffect } from 'react';


function BookList() {
     // State för att lagra böcker i korgen
        const [cartItems, setCartItems] = useState(() => {
            // Hämta initial data från localStorage
            const savedCart = localStorage.getItem('cart');
            return savedCart ? JSON.parse(savedCart) : [];
        });
    
        // Uppdatera localStorage när cartItems ändras
        useEffect(() => {
            localStorage.setItem('cart', JSON.stringify(cartItems));
        }, [cartItems]);
    

    const addToCart = (book) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.title === book.title);
            if (existingItem) {
                // Uppdatera kvantiteten
                return prevItems.map((item) =>
                    item.title === book.title
                        ? { ...item, quantity: item.quantity + (book.quantity || 1) }
                        : item
                );
            } else {
                // Lägg till ny bok i korgen med kvantitet 1 om ingen är angiven
                return [...prevItems, { ...book, quantity: book.quantity || 1 }];
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