import React, { useEffect, useState } from "react";
import {
  FaBoxOpen,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaInfoCircle,
} from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL;

function OrdersAdmin() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [statusUpdating, setStatusUpdating] = useState(false);

  // Fetch all orders
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`${API_URL}/get-orders`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Failed to load orders");
        setOrders(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // Fetch order details
  const fetchOrderDetails = async (orderId) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_URL}/get-order/${orderId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to load order");
      setSelectedOrder(data);
    } catch (err) {
      alert("Error loading order details: " + err.message);
    }
  };

  // Update order status
  const updateStatus = async (orderId, newStatus) => {
    setStatusUpdating(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_URL}/orders/${orderId}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to update status");

      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, orderStatus: newStatus } : order
        )
      );
      setSelectedOrder(data);
    } catch (err) {
      alert("Error updating status: " + err.message);
    } finally {
      setStatusUpdating(false);
    }
  };

  if (loading) return <div className="p-6 text-gray-600">Loading orders...</div>;
  if (error) return <div className="text-red-500 p-6">Error: {error}</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-red-700">
        🛒 Orders Dashboard
      </h1>

      {/* Orders List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {orders.length === 0 && (
          <div className="text-center text-gray-500 col-span-full">
            No orders found.
          </div>
        )}
        {orders.map((order) => (
          <div
            key={order._id}
            onClick={() => fetchOrderDetails(order._id)}
            className="cursor-pointer border rounded-2xl shadow-md bg-gradient-to-br from-white to-red-50 hover:shadow-lg transition transform hover:scale-[1.02] p-5"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-gray-700">
                <FaBoxOpen className="inline-block mr-2 text-red-600" />
                Order ID: {order._id.slice(-6)}
              </span>
              <span className="text-sm px-3 py-1 rounded-full bg-red-100 text-red-700 font-medium">
                {order.orderStatus}
              </span>
            </div>
            <p className="flex items-center text-gray-600">
              <FaMoneyBillWave className="mr-2 text-green-600" />
              ₹{order.totalAmount}
            </p>
            <p className="flex items-center text-gray-600 mt-1">
              <FaCalendarAlt className="mr-2 text-blue-600" />
              {new Date(order.placedAt).toLocaleString()}
            </p>
            <p className="flex items-center text-blue-500 mt-3 font-medium">
              <FaInfoCircle className="mr-1" /> Click to view details
            </p>
          </div>
        ))}
      </div>

      {/* Selected Order Details */}
      {selectedOrder && (
        <div className="border p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-red-700">
            Order Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <strong>Order ID:</strong> {selectedOrder._id}
            </div>
            <div>
              <strong>Status:</strong>{" "}
              <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 font-medium">
                {selectedOrder.orderStatus}
              </span>
            </div>
            <div>
              <strong>Payment Status:</strong> {selectedOrder.paymentStatus}
            </div>
            <div>
              <strong>Placed At:</strong>{" "}
              {new Date(selectedOrder.placedAt).toLocaleString()}
            </div>
          </div>

          <h3 className="mt-6 font-semibold text-lg">🛍️ Items:</h3>
          <ul className="mb-4 mt-2 space-y-2">
            {selectedOrder.items.map((item, idx) => (
              <li
                key={idx}
                className="p-3 border rounded-lg bg-white shadow-sm flex justify-between"
              >
                <span>{item.name} × {item.quantity}</span>
                <span className="font-medium">₹{item.price}</span>
              </li>
            ))}
          </ul>

          <h3 className="font-semibold text-lg">📍 Shipping Address:</h3>
          <p className="mt-2 bg-white p-3 rounded-lg shadow-sm">
            {selectedOrder.shippingAddress.street},{" "}
            {selectedOrder.shippingAddress.city},{" "}
            {selectedOrder.shippingAddress.state} -{" "}
            {selectedOrder.shippingAddress.zip},{" "}
            {selectedOrder.shippingAddress.country || "India"}
          </p>

          {/* Update Status */}
          <div className="mt-6">
            <label htmlFor="status" className="block font-semibold mb-1">
              Update Order Status:
            </label>
            <select
              id="status"
              value={selectedOrder.orderStatus}
              onChange={(e) => updateStatus(selectedOrder._id, e.target.value)}
              disabled={statusUpdating}
              className="border p-2 rounded w-full md:w-1/3 shadow-sm"
            >
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrdersAdmin;
