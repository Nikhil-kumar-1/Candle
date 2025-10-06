import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;
const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY_ID;

function Cart() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
  });
  const navigate = useNavigate();
  const [isPaying, setIsPaying] = useState(false);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch(`${API_URL}/get-cart`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message);
        setCart(data);
      } catch (err) {
        setError(err.message || "Failed to load cart");
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  const totalAmount =
    cart?.items?.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    ) || 0;

  const openRazorpay = async (orderData) => {
    const options = {
      key: RAZORPAY_KEY,
      amount: orderData.amount,
      currency: "INR",
      name: "Your Store",
      description: "Test Transaction",
      order_id: orderData.id,
      handler: async function (response) {
        try {
          const itemsForOrder = cart.items.map((item) => ({
            product: item.product._id,
            name: item.product.name,
            price: item.product.price,
            quantity: item.quantity,
            image: item.product.image || "",
          }));

          const res = await fetch(`${API_URL}/verify-payment`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              items: itemsForOrder,
              shippingAddress: address,
              totalAmount,
            }),
          });

          const data = await res.json();
          if (!res.ok) throw new Error(data.message);
          alert("✅ Payment successful and order placed!");
          setCart(null);
          setShowAddressForm(false);
          navigate("/my-orders");
        } catch (err) {
          alert("❌ Payment verification failed: " + err.message);
        }
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      theme: { color: "#1D4ED8" },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  const handleProceedToPayment = async () => {
    if (!address.street || !address.city || !address.state || !address.zip) {
      return alert("Please fill in all address fields.");
    }

    setIsPaying(true);
    try {
      const res = await fetch(`${API_URL}/create-razorpay-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ amount: totalAmount * 100 }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      openRazorpay(data);
    } catch (err) {
      alert("❌ Failed to create Razorpay order: " + err.message);
    }
    setIsPaying(false);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (loading) return <div>Loading cart...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  // 🛒 When cart is empty
  if (!cart || !cart.items || cart.items.length === 0)
    return (
      <div className="flex flex-col justify-center items-center h-96 text-center">
        <h2 className="text-2xl font-semibold mb-3">🛒 Your cart is empty!</h2>
        <p className="text-gray-600 mb-6">
          Looks like you haven't added anything yet.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Go to Shop
        </button>
      </div>
    );

  return (
    <div className="p-6 max-w-4xl mx-auto mt-12">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      <div className="space-y-4">
        {cart.items.map((item) => (
          <div
            key={item.product._id}
            className="flex justify-between items-center border p-4 rounded"
          >
            <div>
              <div className="font-semibold">{item.product.name}</div>
              <div>Qty: {item.quantity}</div>
              <div>Price: {item.product.price} Rs</div>
            </div>
            <div className="font-bold">
              {item.quantity * item.product.price} Rs
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <div className="text-xl font-bold">Total: {totalAmount} Rs</div>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          onClick={() => setShowAddressForm(true)}
        >
          Checkout
        </button>
      </div>

      {/* Address Modal */}
      {showAddressForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">
              Enter Shipping Address
            </h2>

            <input
              type="text"
              placeholder="Street"
              className="w-full border p-2 mb-2"
              value={address.street}
              onChange={(e) =>
                setAddress({ ...address, street: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="City"
              className="w-full border p-2 mb-2"
              value={address.city}
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
            />
            <input
              type="text"
              placeholder="State"
              className="w-full border p-2 mb-2"
              value={address.state}
              onChange={(e) =>
                setAddress({ ...address, state: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Zip"
              className="w-full border p-2 mb-4"
              value={address.zip}
              onChange={(e) => setAddress({ ...address, zip: e.target.value })}
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowAddressForm(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleProceedToPayment}
                className="px-4 py-2 bg-blue-600 text-white rounded"
                disabled={isPaying}
              >
                {isPaying ? "Processing..." : "Proceed to Payment"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
