import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductsByCategory() {
  const { slug } = useParams(); // e.g. "silken-glow"
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Helper: convert slug to category name
  const formatCategoryName = (slug) => {
    return slug.replace(/-/g, " ").toUpperCase();
    // "silken-glow" -> "SILKEN GLOW"
  };

  const categoryName = formatCategoryName(slug);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `http://localhost:4000/api/v1/products-by-category/${slug}`
        );
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        console.log(data);
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (products.length === 0)
    return <p className="text-center">No products found in {categoryName}</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Heading */}
      <h1 className="text-3xl font-extrabold text-center text-[#152336] mb-10 tracking-wide">
        {categoryName}
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            {/* Product Image */}
            <div className="relative w-full h-52 overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-300"></div>
            </div>

            {/* Product Info */}
            <div className="p-4 flex flex-col justify-between h-32">
              <h2 className="text-lg font-semibold text-gray-800 group-hover:text-[#f4aa2d] transition">
                {product.name}
              </h2>
              <p className="text-gray-600 mt-2 text-sm line-clamp-2">
                {product.description || "Elegant fragrance for your home"}
              </p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-lg font-bold text-[#152336]">
                  ₹{product.price}
                </span>
                <button className="px-3 py-1 text-sm font-medium text-white bg-[#f4aa2d] rounded-lg shadow hover:bg-[#d9931e] transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsByCategory;
