import React, { useEffect, useState } from "react";
import ProductForm from "./Products/ProductForm";
import ProductList from "./Products/ProductList";
const API_URL = import.meta.env.VITE_API_URL;
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/get-all-products`);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="bg-gray-300">
      <ProductForm setProducts={setProducts} />
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
};
export default Products;