import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const groceryItems = [
    { id: 1, name: 'Apple', price: 1.2, image: 'apple.webp' },
    { id: 2, name: 'Banana', price: 0.5, image: 'banana.webp' },
    { id: 3, name: 'Carrot', price: 0.8, image: 'carrot.jpg' },
    { id: 4, name: 'Milk', price: 1.5, image: 'milk.webp' },
    { id: 5, name: 'Bread', price: 2.0, image: 'bread.webp' }
  ];

  const [cart, setCart] = useState([]);

  // Add to Cart Function
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Remove from Cart Function
  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const totalAmount = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <div className="App">
      <header className="header">
        <h1>Grocery Store</h1>
      </header>

      <div className="products">
        {groceryItems.map((item) => (
          <div className="product" key={item.id}>
            <img src={item.image} alt={item.name} className="product-image" />
            <div className="product-info">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} - ${item.price}
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
            <p>Total: ${totalAmount}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

