import React, { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function OrdersAdmin() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [statusUpdating, setStatusUpdating] = useState(false);

  // Fetch all orders for logged-in user
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

  // Fetch order details by ID
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

      // Update order in local state
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, orderStatus: newStatus } : order
        )
      );
      setSelectedOrder(data);
      alert("Order status updated");
    } catch (err) {
      alert("Error updating status: " + err.message);
    } finally {
      setStatusUpdating(false);
    }
  };

  if (loading) return <div>Loading orders...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>

      {/* Orders List */}
      <div className="mb-8">
        {orders.length === 0 && <div>No orders found.</div>}
        {orders.map((order) => (
          <div
            key={order._id}
            onClick={() => fetchOrderDetails(order._id)}
            className="cursor-pointer p-4 border rounded mb-2 hover:bg-gray-100"
          >
            <div>
              <strong>Order ID:</strong> {order._id}
            </div>
            <div>
              <strong>Status:</strong> {order.orderStatus}
            </div>
            <div>
              <strong>Total Amount:</strong> ₹{order.totalAmount}
            </div>
            <div>
              <strong>Placed At:</strong>{" "}
              {new Date(order.placedAt).toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      {/* Selected Order Details */}
      {selectedOrder && (
        <div className="border p-6 rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-4">Order Details</h2>

          <div>
            <strong>Order ID:</strong> {selectedOrder._id}
          </div>
          <div>
            <strong>Status:</strong> {selectedOrder.orderStatus}
          </div>
          <div>
            <strong>Payment Status:</strong> {selectedOrder.paymentStatus}
          </div>
          <div>
            <strong>Placed At:</strong>{" "}
            {new Date(selectedOrder.placedAt).toLocaleString()}
          </div>

          <h3 className="mt-4 font-semibold">Items:</h3>
          <ul className="mb-4">
            {selectedOrder.items.map((item, idx) => (
              <li key={idx} className="mb-2">
                {item.name} — Qty: {item.quantity} — ₹{item.price} each
              </li>
            ))}
          </ul>

          <h3 className="font-semibold">Shipping Address:</h3>
          <p>
            {selectedOrder.shippingAddress.street}, {selectedOrder.shippingAddress.city},{" "}
            {selectedOrder.shippingAddress.state} - {selectedOrder.shippingAddress.zip},{" "}
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
              onChange={(e) =>
                updateStatus(selectedOrder._id, e.target.value)
              }
              disabled={statusUpdating}
              className="border p-2 rounded"
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
