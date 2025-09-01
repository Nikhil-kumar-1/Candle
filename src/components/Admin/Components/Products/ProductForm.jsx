import React, { useState } from "react";
import { FiTag, FiDollarSign, FiBox, FiLayers, FiImage, FiCheckSquare, FiType } from "react-icons/fi";
const API_URL = import.meta.env.VITE_API_URL;

const ProductForm = ({ setProducts }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: 0,
    images: [null],
    category: "",
    stock: 0,
    brand: "",
    isFeatured: false,
  });

  const handleInputChange = (e) => {
    const { name, type, value, checked, files } = e.target;
    if (type === "file") {
      const index = parseInt(name.split("-")[1], 10);
      const file = files[0];
      if (file) {
        const newImages = [...newProduct.images];
        newImages[index] = file;
        setNewProduct((prev) => ({ ...prev, images: newImages }));
      }
    } else if (type === "checkbox") {
      setNewProduct((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "number") {
      setNewProduct((prev) => ({ ...prev, [name]: Number(value) }));
    } else {
      setNewProduct((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addImageInput = () => {
    setNewProduct((prev) => ({
      ...prev,
      images: [...prev.images, null],
    }));
  };

  const addProduct = async (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.category || newProduct.price <= 0) {
      alert("Please fill in all required fields: Name, Category, and Price.");
      return;
    }
    const formData = new FormData();
    Object.entries(newProduct).forEach(([key, value]) => {
      if (key === "images") {
        value.forEach((file) => file && formData.append("images", file));
      } else {
        formData.append(key, value);
      }
    });
    try {
      const res = await fetch(`${API_URL}/add-product`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        setProducts((prev) => [...prev, data.product]);
        setNewProduct({
          name: "",
          description: "",
          price: 0,
          images: [null],
          category: "",
          stock: 0,
          brand: "",
          isFeatured: false,
        });
      } else {
        alert(data.message || "Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <form
      onSubmit={addProduct}
      className="bg-white shadow-lg rounded-2xl p-6 max-w-3xl mx-auto grid gap-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-2">➕ Add New Product</h2>

      {/* Grid Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="flex items-center gap-2 font-semibold text-gray-700">
            <FiTag /> Name*
          </label>
          <input
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            required
            className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Category */}
        <div>
          <label className="flex items-center gap-2 font-semibold text-gray-700">
            <FiLayers /> Category*
          </label>
          <input
            name="category"
            value={newProduct.category}
            onChange={handleInputChange}
            required
            className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Price */}
        <div>
          <label className="flex items-center gap-2 font-semibold text-gray-700">
            <FiDollarSign /> Price*
          </label>
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            min="0"
            required
            className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Stock */}
        <div>
          <label className="flex items-center gap-2 font-semibold text-gray-700">
            <FiBox /> Stock
          </label>
          <input
            type="number"
            name="stock"
            value={newProduct.stock}
            onChange={handleInputChange}
            min="0"
            className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Brand */}
        <div className="md:col-span-2">
          <label className="flex items-center gap-2 font-semibold text-gray-700">
            <FiType /> Brand
          </label>
          <input
            name="brand"
            value={newProduct.brand}
            onChange={handleInputChange}
            className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block font-semibold text-gray-700 mb-1">Description</label>
        <textarea
          name="description"
          value={newProduct.description}
          onChange={handleInputChange}
          className="border rounded-lg p-2 w-full h-24 focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Images */}
      <div>
        <label className="flex items-center gap-2 font-semibold text-gray-700 mb-2">
          <FiImage /> Images
        </label>
        {newProduct.images.map((img, i) => (
          <div key={i} className="mb-3 flex items-center gap-3">
            <input
              type="file"
              name={`images-${i}`}
              onChange={handleInputChange}
              accept="image/*"
              className="border rounded-lg p-2 w-full"
            />
            {img && (
              <img
                src={URL.createObjectURL(img)}
                alt={`Preview ${i}`}
                className="w-16 h-16 object-cover rounded-lg shadow"
              />
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addImageInput}
          className="text-blue-600 hover:text-blue-800 font-medium mt-2"
        >
          + Add another image
        </button>
      </div>

      {/* Featured */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="isFeatured"
          name="isFeatured"
          checked={newProduct.isFeatured}
          onChange={handleInputChange}
          className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-400"
        />
        <label htmlFor="isFeatured" className="flex items-center gap-2 text-gray-700">
          <FiCheckSquare /> Featured Product
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md font-semibold transition-transform transform hover:scale-105"
      >
        🚀 Add Product
      </button>
    </form>
  );
};

export default ProductForm;
