import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;
function ProductsByCategory() {
  const { slug } = useParams(); // e.g. "silken-glow"
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cartLoading, setCartLoading] = useState(false);
  const [cartError, setCartError] = useState(null);
  const [cartSuccess, setCartSuccess] = useState(null);
  

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
        const res = await fetch(`${API_URL}/products-by-category/${slug}`);
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

  const handleAddToCart = async (product) => {
    setCartLoading(true);
    setCartError(null);
    setCartSuccess(null);
    try {
      const res = await fetch(`${API_URL}/add-to-cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          productId: product._id,
          quantity: 1,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to add to cart");
      setCartSuccess("Product added to cart!");
    } catch (err) {
      setCartError(err.message);
    } finally {
      setCartLoading(false);
    }
  };

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="group relative bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            {/* Product Image */}
            <div className="relative w-full h-56 overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition duration-700 ease-in-out"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>

            {/* Product Info */}
            <div className="p-5 flex flex-col justify-between h-44">
              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-[#f4aa2d] transition-colors duration-300">
                {product.name}
              </h2>
              <p className="text-gray-500 mt-1 text-sm line-clamp-2">
                {product.description || "Elegant fragrance for your home"}
              </p>

              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-bold text-[#f4aa2d]">
                  ₹{product.price}
                </span>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#f4aa2d] rounded-xl shadow-md hover:bg-[#d9931e] hover:scale-105 active:scale-95 transition"
                  onClick={handleAddToCart}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9m-6-4h.01"
                    />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      {cartError && <p className="text-center text-red-500 mt-4">{cartError}</p>}
      {cartSuccess && (
        <p className="text-center text-green-600 mt-4">{cartSuccess}</p>
      )}
      </div>
    </div>
  );
}

export default ProductsByCategory;
