import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [editingAddress, setEditingAddress] = useState(null);
  const [editedAddress, setEditedAddress] = useState("");
  const [orderForSomeoneElse, setOrderForSomeoneElse] = useState(false);
  const [someoneElseName, setSomeoneElseName] = useState("");
  const [someoneElsePhone, setSomeoneElsePhone] = useState("");

  // Load cart and addresses from localStorage on initial render
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const savedAddresses = JSON.parse(localStorage.getItem("addresses")) || [];
    setCart(savedCart);
    setAddresses(savedAddresses);
    setSelectedAddress(localStorage.getItem("selectedAddress") || "");
  }, []);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const applyCoupon = () => {
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

  const handleAddAddress = () => {
    if (newAddress.trim() !== "") {
      const updatedAddresses = [...addresses, newAddress];
      setAddresses(updatedAddresses);
      setNewAddress("");
      localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
    }
  };

  const handleSelectAddress = (address) => {
    setSelectedAddress(address);
    localStorage.setItem("selectedAddress", address); // Save selected address
  };

  const handleDeleteAddress = (addressToDelete) => {
    const updatedAddresses = addresses.filter(
      (address) => address !== addressToDelete
    );
    setAddresses(updatedAddresses);
    localStorage.setItem("addresses", JSON.stringify(updatedAddresses));

    // If the deleted address was the selected one, clear selection
    if (selectedAddress === addressToDelete) {
      setSelectedAddress("");
      localStorage.removeItem("selectedAddress");
    }
  };

  const handleEditAddress = (addressToEdit) => {
    setEditingAddress(addressToEdit);
    setEditedAddress(addressToEdit);
  };

  const handleSaveEditedAddress = () => {
    const updatedAddresses = addresses.map((address) =>
      address === editingAddress ? editedAddress : address
    );
    setAddresses(updatedAddresses);
    localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
    setEditingAddress(null);
    setEditedAddress("");
  };

  const finalPrice = totalPrice - discount;

  const handleProceedToPay = () => {
    if (!selectedAddress) {
      alert("Please select a delivery address.");
      return;
    }
    // Proceed to payment logic can be added here (e.g., redirect to payment gateway)
    alert("Proceeding to Payment...");
  };

  return (
    <div className="container py-16 px-4 bg-gray-50 min-h-screen relative">
      {/* Important Note */}
<p className="text-red-600 text-center mt-6 font-semibold text-xl">
  <strong>Note:</strong> A valid driver's license is required to take possession of a vehicle. The vehicle will not be handed over without the licensed individual present.
</p>

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

          {/* Address Section */}
          <div className="mt-8 p-4 bg-indigo-50 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Delivery Address</h2>
            {addresses.length > 0 && (
              <div className="mb-4">
                <h3 className="font-medium text-gray-800">Saved Addresses:</h3>
                <ul className="space-y-4">
                  {addresses.map((address, index) => (
                    <li
                      key={index}
                      className={`p-2 border rounded-lg ${
                        selectedAddress === address
                          ? "bg-indigo-100 border-indigo-600"
                          : "border-gray-300"
                      }`}
                    >
                      {editingAddress === address ? (
                        <div className="flex items-center space-x-2">
                          <input
                            type="text"
                            value={editedAddress}
                            onChange={(e) => setEditedAddress(e.target.value)}
                            className="py-1 px-2 border rounded-lg text-gray-700 focus:outline-none"
                          />
                          <button
                            onClick={handleSaveEditedAddress}
                            className="py-1 px-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
                          >
                            Save
                          </button>
                        </div>
                      ) : (
                        <div className="flex justify-between items-center">
                          <span
                            className="cursor-pointer"
                            onClick={() => handleSelectAddress(address)}
                          >
                            {address}
                          </span>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleEditAddress(address)}
                              className="text-blue-600 hover:underline"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteAddress(address)}
                              className="text-red-600 hover:underline"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex items-center space-x-4">
              <input
                type="text"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
                placeholder="Enter new address"
                className="py-2 px-4 border rounded-lg text-gray-700 focus:outline-none"
              />
              <button
                onClick={handleAddAddress}
                className="py-2 px-6 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
              >
                Add Address
              </button>
            </div>
          </div>

          {/* Display Selected Address */}
          {selectedAddress && (
            <div className="mt-4 p-4 bg-green-50 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800">Selected Address:</h2>
              <p className="text-lg text-gray-800 mt-2">{selectedAddress}</p>
              <div className="mt-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={orderForSomeoneElse}
                    onChange={() => setOrderForSomeoneElse(!orderForSomeoneElse)}
                    className="text-indigo-600"
                  />
                  <span className="text-gray-800">Order for Someone Else</span>
                </label>

                {orderForSomeoneElse && (
                  <div className="mt-4 space-y-4">
                    <input
                      type="text"
                      placeholder="Recipient's Name"
                      value={someoneElseName}
                      onChange={(e) => setSomeoneElseName(e.target.value)}
                      className="w-full py-2 px-4 border rounded-lg text-gray-700"
                    />
                    <input
                      type="text"
                      placeholder="Recipient's Phone"
                      value={someoneElsePhone}
                      onChange={(e) => setSomeoneElsePhone(e.target.value)}
                      className="w-full py-2 px-4 border rounded-lg text-gray-700"
                    />
                  </div>
                )}
              </div>
            </div>
          )}

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

          {/* Coupon and Apply */}
          {!isCouponApplied && (
            <div className="mt-4 p-4 bg-indigo-100 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800">Apply Coupon</h2>
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter Coupon Code"
                  className="py-2 px-4 border rounded-lg"
                />
                <button
                  onClick={applyCoupon}
                  className="py-2 px-4 bg-indigo-600 text-white rounded-lg"
                >
                  Apply
                </button>
              </div>
            </div>
          )}

          {/* Proceed to Pay */}
          <div className="mt-8 flex justify-end">
            <button
              onClick={handleProceedToPay}
              className="py-3 px-6 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Proceed to Pay
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-xl font-semibold text-gray-800">Your Cart is Empty!</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
