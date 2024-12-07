import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom"; // To navigate to checkout or other pages

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart, addToCart } = useContext(CartContext);

  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="pb-24">
      <div className="container">
        <h1 className="text-3xl sm:text-4xl font-semibold font-serif mb-3 text-center">
          Your Booking Cart
        </h1>
        <p className="text-sm pb-10 text-center text-gray-500">
          Review your selected items before confirming your booking.
        </p>

        {cartItems.length === 0 ? (
          <p className="text-center text-xl text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-8">
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-6 p-6 border-2 border-gray-300 rounded-xl bg-white shadow-lg">
                <div className="w-[100px] h-[100px]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl text-primary">{item.name}</h3>
                  <p className="text-lg text-gray-700">Price: ${item.price}</p>
                  <p className="text-sm text-gray-500">Model: {item.model}</p>
                </div>
                <div className="flex items-center space-x-4">
                  {/* Decrease quantity */}
                  <button
                    className="text-sm text-gray-500"
                    onClick={() => item.quantity > 1 && removeFromCart(item)} // Ensure quantity is greater than 1 before decreasing
                  >
                    -
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  {/* Increase quantity */}
                  <button
                    className="text-sm text-gray-500"
                    onClick={() => item.quantity < 1 && addToCart(item)} // Check if the quantity is within limit before adding
                  >
                    +
                  </button>
                  <button
                    className="text-sm text-red-500"
                    onClick={() => removeFromCart(item)} // Remove item
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center py-6">
              <h2 className="text-2xl font-semibold text-gray-700">Total: ${totalPrice}</h2>
              <div className="space-x-4">
                <button
                  onClick={clearCart} // Clear cart button
                  className="py-2 px-6 bg-red-500 text-white rounded-lg"
                >
                  Clear Cart
                </button>
                <Link to="/checkout">
                  <button className="py-2 px-6 bg-primary text-white rounded-lg">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
