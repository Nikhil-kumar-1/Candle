import React from "react";
import { FaEdit, FaTrash, FaTag, FaBoxes, FaStar, FaStore } from "react-icons/fa";

const ProductItem = ({ product, onEdit, onDelete }) => {
  return (
    <div className="relative max-w-3xl mx-auto m-2 border rounded-2xl shadow-lg overflow-hidden bg-gradient-to-br from-red-100 to-red-200 hover:scale-[1.02] transition-transform duration-300">
      <div className="p-5">
        <h3 className="text-xl font-bold text-red-900 mb-2">{product.name}</h3>
        <div className="space-y-2 text-gray-800">
          <p className="flex items-center gap-2">
            <FaTag className="text-red-600" /> Category:{" "}
            <span className="font-medium">{product.category}</span>
          </p>
          <p className="flex items-center gap-2">
            💲 Price:{" "}
            <span className="font-semibold text-green-700">
              {product.price.toFixed(2)} INR
            </span>
          </p>
          <p className="flex items-center gap-2">
            <FaBoxes className="text-blue-600" /> Stock:{" "}
            <span>{product.stock}</span>
          </p>
          <p className="flex items-center gap-2">
            <FaStore className="text-purple-600" /> Brand:{" "}
            <span>{product.brand || "-"}</span>
          </p>
          <p className="flex items-center gap-2">
            <FaStar
              className={`${
                product.isFeatured ? "text-yellow-500" : "text-gray-400"
              }`}
            />{" "}
            Featured: {product.isFeatured ? "Yes" : "No"}
          </p>
        </div>

        {/* Images */}
        {product.images?.length > 0 && (
          <div className="flex gap-3 mt-4 flex-wrap">
            {product.images.map((imgUrl, i) => (
              <img
                key={i}
                src={imgUrl}
                alt={`${product.name} ${i}`}
                className="w-20 h-20 object-cover rounded-lg shadow-md border border-gray-200 hover:scale-105 transition-transform"
              />
            ))}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between px-5 py-3 bg-gradient-to-r from-red-400 to-red-600 text-white rounded-b-2xl">
        <button
          onClick={onEdit}
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg shadow-md transition"
        >
          <FaEdit /> Edit
        </button>
        <button
          onClick={onDelete}
          className="flex items-center gap-2 bg-red-700 hover:bg-red-800 px-4 py-2 rounded-lg shadow-md transition"
        >
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
