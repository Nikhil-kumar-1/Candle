import { useState } from "react";
import { FiX } from "react-icons/fi";

const EditProductModal = ({ product, onClose, onSave }) => {
  const [form, setForm] = useState({
    name: product.name,
    description: product.description,
    price: product.price,
    stock: product.stock,
    brand: product.brand,
    category: product.category,
    isFeatured: product.isFeatured,
  });
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(product._id, form);
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center mt-12">
      <div className="bg-white p-6 rounded w-96 relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 text-gray-500 hover:text-gray-700 mt-6 mr-2"
        >
          <FiX size={40} />
        </button>
        <h2 className="text-xl font-bold mb-4">Edit Product</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="border p-2 w-full"
            required
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="border p-2 w-full"
          />
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
            className="border p-2 w-full"
            min="0"
            required
          />
          <input
            type="number"
            name="stock"
            value={form.stock}
            onChange={handleChange}
            placeholder="Stock"
            className="border p-2 w-full"
            min="0"
          />
          <input
            name="brand"
            value={form.brand}
            onChange={handleChange}
            placeholder="Brand"
            className="border p-2 w-full"
          />
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Category"
            className="border p-2 w-full"
            required
          />
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="isFeatured"
              checked={form.isFeatured}
              onChange={handleChange}
            />
            <span>Featured</span>
          </label>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 px-3 py-1 rounded text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 px-3 py-1 rounded text-white"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditProductModal;