import React, { useState } from 'react';


function BookItem({ title, author, pages, genre, desc }) {
    const [inCart, setInCart] = useState(false);

    const handleAddToCart = () => {
        setInCart(true);
        alert(`${title} added to cart!`);
    };

    return (
        <li className="book-item">
            <article className="book-info">
                <h2 className="book-title">{title}</h2>
                <p className="book-author">Author: {author}</p>
                <p className="book-pages">Pages: {pages}</p>
                <p className="book-genre">Genre: {genre}</p>
                <p className="book-desc">Description: {desc}</p>
                <aside className="book-aside">
                <button 
                    onClick={handleAddToCart} 
                    className={`cart-btn ${inCart ? "in-cart" : ""}`}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    {inCart ? "Added" : "Add to cart"}
                 
                </button>
                </aside>
            </article>
        </li>
    );
}

export default BookItem;


