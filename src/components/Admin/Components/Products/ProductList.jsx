import { useState } from "react";
import ProductItem from "./ProductItem";
import EditProductModal from "./EditProductModal";

const API_URL = import.meta.env.VITE_API_URL;

const ProductList = ({ products, setProducts }) => {
  const [editingProduct, setEditingProduct] = useState(null);
  const token = localStorage.getItem("token");
  // Delete handler
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      const res = await fetch(`${API_URL}/delete-product/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();

      if (res.ok) {
        setProducts((prev) => prev.filter((p) => p._id !== id));
        alert("Product deleted successfully");
      } else {
        alert(data.message || "Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Edit handler (open modal with product data)
  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  // Save handler (API call to update product)
  const handleSaveEdit = async (id, updatedFields) => {
    try {
      const res = await fetch(`${API_URL}/update-product/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedFields),
      });

      const data = await res.json();

      if (res.ok) {
        setProducts((prev) =>
          prev.map((p) => (p._id === id ? data : p))
        );
        setEditingProduct(null); // close modal
        alert("Product updated successfully");
      } else {
        alert(data.message || "Failed to update product");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <>
      <ul className="space-y-4">
        {products.map((p) => (
          <ProductItem
            key={p._id}
            product={p}
            onEdit={() => handleEdit(p)}
            onDelete={() => handleDelete(p._id)}
          />
        ))}
      </ul>

      {editingProduct && (
        <EditProductModal
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
          onSave={handleSaveEdit}
        />
      )}
    </>
  );
};

export default ProductList;
