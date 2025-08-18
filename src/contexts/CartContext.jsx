import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [] });
  const token = localStorage.getItem("token");

  // Fetch cart from backend when logged in
  useEffect(() => {
    if (token) {
      fetch("http://localhost:4000/api/v1/cart", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => setCart(data))
        .catch((err) => console.error(err));
    }
  }, [token]);

  // Add product to cart
  const addToCart = async (productId, quantity = 1) => {
    const res = await fetch("http://localhost:4000/api/v1/cart/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ productId, quantity }),
    });
    const updatedCart = await res.json();
    setCart(updatedCart);
  };

  // Update item quantity
  const updateCartItem = async (productId, quantity) => {
    const res = await fetch("http://localhost:4000/api/v1/cart/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ productId, quantity }),
    });
    const updatedCart = await res.json();
    setCart(updatedCart);
  };

  // Remove item from cart
  const removeFromCart = async (productId) => {
    const res = await fetch(`http://localhost:4000/api/v1/cart/remove/${productId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    const updatedCart = await res.json();
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCartItem, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
