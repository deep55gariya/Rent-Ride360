// src/components/CartPage.jsx

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext"; // Import the CartContext to manage cart data

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext); // Get cart items and actions from the context

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  // If the cart is empty, show a message
  if (cartItems.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-3xl font-semibold">Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-semibold text-center">Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b py-4">
            <div className="flex items-center space-x-4">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
              <div>
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p>{item.description}</p>
              </div>
            </div>
            <div className="flex flex-col items-end space-y-2">
              <p className="text-lg font-semibold">₹{item.price}</p>
              <button
                onClick={() => removeFromCart(item.id)} // Remove item from cart
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-8">
        <h2 className="text-xl font-semibold">Total Price: ₹{totalPrice}</h2>
        <button
          onClick={clearCart} // Clear the entire cart
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartPage;
