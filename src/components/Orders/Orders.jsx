import React, { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("User not logged in");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`${API_URL}/get-my-orders`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || "Failed to fetch orders");
        }

        const data = await res.json();
        setOrders(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <div>Loading orders...</div>;

  if (error) return <div className="text-red-500">Error: {error}</div>;

  if (orders.length === 0)
    return <div>You have no orders yet.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 mt-8">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>

      {orders.map((order) => (
        <div
          key={order._id}
          className="border rounded p-4 mb-6 shadow-md"
        >
          <div className="mb-2 font-semibold">
            Order ID: {order._id}
          </div>
          <div>Status: {order.orderStatus}</div>
          <div>Placed At: {new Date(order.placedAt).toLocaleString()}</div>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Items:</h3>
            <ul className="list-disc list-inside">
              {order.items.map((item, idx) => (
                <li key={idx} className="mb-1">
                  {item.name} — Qty: {item.quantity} — Price: ₹{item.price}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-3 font-bold">
            Total Amount: ₹{order.totalAmount}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Orders;
