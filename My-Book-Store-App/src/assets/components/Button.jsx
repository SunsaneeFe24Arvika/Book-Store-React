import React, { useState, useEffect } from 'react';

function ButtonFunction() {
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

    // Funktion för att lägga till en bok i korgen
    const addToCart = (book) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === book.id);
            if (existingItem) {
                // Om boken redan finns i korgen, öka antalet
                return prevItems.map((item) =>
                    item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // Lägg till ny bok i korgen
                return [...prevItems, { ...book, quantity: 1 }];
            }
        });
    };

    // Beräkna totalt antal artiklar i korgen
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="cart-container">
            <button className="check-out-cart">
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="cart-count">{totalItems}</span>
            </button>
        </div>
    );
}

export default ButtonFunction;