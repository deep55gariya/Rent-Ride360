import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const applyCoupon = () => {
    // For demonstration, a coupon code "SAVE10" gives a 10% discount
    if (couponCode === "SAVE10") {
      setDiscount(totalPrice * 0.1); // 10% discount
      setIsCouponApplied(true);
    } else {
      alert("Invalid coupon code!");
      setIsCouponApplied(false);
    }
  };

  const updateQuantity = (id, increment) => {
    const updatedCart = [...cart];
    const itemIndex = updatedCart.findIndex((item) => item.id === id);

    if (itemIndex > -1) {
      updatedCart[itemIndex].quantity += increment;

      if (updatedCart[itemIndex].quantity <= 0) {
        updatedCart.splice(itemIndex, 1); // Remove item if quantity is 0
      }

      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
    }
  };

  const finalPrice = totalPrice - discount;

  return (
    <div className="container py-16 px-4 bg-gray-50 min-h-screen relative">
      <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-12">
        Your Shopping Cart
      </h1>
      {cart.length > 0 ? (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b-2 py-6 mb-8 shadow-lg rounded-lg bg-white"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 object-cover rounded-lg shadow-md"
              />
              <div className="flex flex-col items-start ml-6 space-y-2 w-3/5">
                <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                <p className="text-gray-500">${item.price}</p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="py-1 px-3 bg-indigo-500 text-white rounded-full transition-transform duration-300 hover:scale-110"
                  >
                    -
                  </button>
                  <span className="text-lg font-medium text-gray-800">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="py-1 px-3 bg-indigo-500 text-white rounded-full transition-transform duration-300 hover:scale-110"
                  >
                    +
                  </button>
                </div>
                <p className="font-semibold text-lg text-gray-800">
                  ${item.price * item.quantity}
                </p>
              </div>
            </div>
          ))}

          {/* Coupon Section */}
          <div className="mt-8 p-4 bg-indigo-50 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Apply Coupon</h2>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter coupon code"
                className="py-2 px-4 border rounded-lg text-gray-700 focus:outline-none"
              />
              <button
                onClick={applyCoupon}
                className="py-2 px-6 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
              >
                Apply
              </button>
            </div>
            {isCouponApplied && (
              <p className="mt-4 text-green-600 font-semibold">
                Coupon Applied: {discount.toFixed(2)} off
              </p>
            )}
            {!isCouponApplied && couponCode && (
              <p className="mt-4 text-red-600 font-semibold">Invalid coupon code.</p>
            )}
          </div>

          {/* Cart Summary */}
          <div className="flex justify-between items-center pt-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Total: ${totalPrice.toFixed(2)}
            </h2>
            <h2 className="text-2xl font-semibold text-gray-800">
              Final Price: ${finalPrice.toFixed(2)}
            </h2>
          </div>

          {/* Total Amount Section */}
          <div className="mt-8 p-4 bg-indigo-50 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Total Amount for Items</h2>
            <div className="flex justify-between items-center">
              <span className="text-lg text-gray-800">Subtotal:</span>
              <span className="text-lg font-semibold text-gray-800">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg text-gray-800">Discount:</span>
              <span className="text-lg font-semibold text-red-600">-${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg text-gray-800">Final Price:</span>
              <span className="text-lg font-semibold text-gray-800">${finalPrice.toFixed(2)}</span>
            </div>
          </div>

          {/* Proceed to Pay Button */}
          <div className="absolute bottom-6 right-6">
            <button className="py-3 px-6 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
              Proceed to Pay
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500 text-xl">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
