import React, { useState } from 'react';


function BookItem({ title, author, pages, genre, desc, addToCart }) {
    const [quantity, setQuantity] = useState(0); // Hantera kvantitet lokalt

    const handleIncrease = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrease = () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 0));
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
                    <div className="quantity-container">
                        <button onClick={handleDecrease} className="decrease-btn">
                            <p className="minus-btn">-</p>
                        </button>
                        <span className="quantity">{quantity}</span>
                        <button onClick={handleIncrease} className="increase-btn">
                            <p className="puls-btn">+</p>
                        </button>
                    </div>
                    <button 
                        onClick={() => addToCart({ title, author, pages, genre, desc, quantity })} 
                        className="cart-btn">
                        <i className="fa-solid fa-cart-shopping"></i>
                        Add to cart
                    </button>
                </aside>
            </article>
        </li>
    );
}

export default BookItem;