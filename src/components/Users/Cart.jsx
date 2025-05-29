import React, { useState, useEffect } from "react";
import "../../assets/styles/cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    let response = await fetch("http://localhost:4000/cartitem");
    let data = await response.json();
    setCartItems(data);
  };

  const removeFromCart = async (id) => {
    let confirmRemove = window.confirm("Do you want to remove this book from Cart?");
    if (confirmRemove) {
      await fetch(`http://localhost:4000/cartitem/${id}`, {
        method: 'DELETE',
      });
      alert("Book removed from cart successfully!");
      loadCart();
    } else {
      alert("Book was not removed from the cart.");
    }
  };

  return (
    <>
      <div className="cart">
        <h1 className="cart-header">Cart Items</h1>
          <div className="cart-container">
            {cartItems.map((book) => (
              <div className="cart-card" key={book.id}>
                <img src={book.thumbnailUrl} alt="Book Cover" />
                <h3>{book.title}</h3>
                <p>Authors: {book.authors}</p>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(book.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        
      </div>
    </>
  );
};

export default Cart;
