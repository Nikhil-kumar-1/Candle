import React, { useState, useEffect, useMemo } from "react";
import { FiShoppingCart } from "react-icons/fi";

const API_URL = import.meta.env.VITE_API_URL;

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cartCounts, setCartCounts] = useState({}); // key: productId, value: quantity
  const [isAddingMap, setIsAddingMap] = useState({}); // key: productId, value: bool

  // Filters & state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [priceRange, setPriceRange] = useState([0]);
  const [sortBy, setSortBy] = useState("");

  console.log({ searchQuery, selectedCategory, selectedBrand, priceRange, sortBy });

  // Fetch products
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      setError(null);
      try {
        let url = `${API_URL}/get-all-products`;

        if (searchQuery) {
          url = `${API_URL}/search?query=${encodeURIComponent(searchQuery)}`;
        } else if (selectedCategory) {
          url = `${API_URL}/products-by-category/${encodeURIComponent(selectedCategory)}`;
        } else if (selectedBrand) {
          url = `${API_URL}/products-by-brand/${encodeURIComponent(selectedBrand)}`;
        } else if (sortBy === "top-rated") {
          url = `${API_URL}/top-rated-products`;
        } else if (sortBy === "latest") {
          url = `${API_URL}/latest-products`;
        } else if (sortBy === "featured") {
          url = `${API_URL}/featured-products`;
        } else if (sortBy === "price-low" || sortBy === "price-high") {
          url = `${API_URL}/products-by-price?min=${priceRange[0]}&max=${priceRange[1]}`;
        }

        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        console.log("Fetched products:", data);
        setProducts(data || []);
      } catch (err) {
        setError(err.message);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [searchQuery, selectedCategory, selectedBrand, priceRange, sortBy]);

  // Filters
  const categories = useMemo(() => {
    return Array.from(new Set(products.map((p) => p.category)));
  }, [products]);

  const brands = useMemo(() => {
    return Array.from(new Set(products.map((p) => p.brand)));
  }, [products]);

  const sortedProducts = useMemo(() => {
    let sorted = [...products];
    if (sortBy === "price-low") sorted.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-high") sorted.sort((a, b) => b.price - a.price);
    else if (sortBy === "rating") sorted.sort((a, b) => b.ratings - a.ratings);
    return sorted;
  }, [products, sortBy]);

  // 🛒 Handle Add/Remove
  const handleClick = async (product, quantityChange) => {
    const productId = product._id;

    if (!localStorage.getItem("token")) {
      alert("Please login to modify your cart.");
      return;
    }
    setIsAddingMap((prev) => ({ ...prev, [productId]: true }));
    try {
      if (quantityChange > 0) {
        await fetch(`${API_URL}/add-to-cart`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ productId, quantity: 1 }),
        });
      } else {
        await fetch(`${API_URL}/remove-from-cart/${productId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
      }
      setCartCounts((prev) => {
        const current = prev[productId] || 0;
        const newCount = Math.max(0, current + quantityChange);
        return { ...prev, [productId]: newCount };
      });
    } catch (err) {
      console.error("Error updating cart:", err);
    }
    setIsAddingMap((prev) => ({ ...prev, [productId]: false }));
  };
  return (
    <div className="p-5 mt-16">
      <h1 className="text-3xl font-bold mb-6">Product Catalog</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-2 w-full max-w-md mb-6 border border-gray-300 rounded"
      />

      {/* Filters */}
      <div className="flex flex-wrap gap-5 mb-6">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 rounded p-2"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
          className="border border-gray-300 rounded p-2"
        >
          <option value="">All Brands</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>

        {/* Price Range */}
        <div className="flex items-center space-x-4">
          <label className="flex flex-col">
            <span className="mb-1 text-sm font-medium">Price Min:</span>
            <input
              type="number"
              value={priceRange[0]}
              min={0}
              max={priceRange[1]}
              onChange={(e) =>
                setPriceRange([Number(e.target.value), priceRange[1]])
              }
              className="w-20 p-1 border border-gray-300 rounded"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-1 text-sm font-medium">Max:</span>
            <input
              type="number"
              value={priceRange[1]}
              min={priceRange[0]}
              max={10000}
              onChange={(e) =>
                setPriceRange([priceRange[0], Number(e.target.value)])
              }
              className="w-20 p-1 border border-gray-300 rounded"
            />
          </label>
        </div>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 rounded p-2"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Top Rated</option>
          <option value="latest">Latest</option>
          <option value="top-rated">Top Rated (Backend)</option>
        </select>

        <button
          onClick={() => {
            setSearchQuery("");
            setSelectedCategory("");
            setSelectedBrand("");
            setPriceRange([0]);
            setSortBy("");
          }}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Clear All Filters
        </button>
      </div>

      {/* Product Grid */}
      {loading && <p>Loading products...</p>}
      {error && <p className="text-red-600">{error}</p>}
      {!loading && !error && sortedProducts.length === 0 && (
        <p>No products found. Try changing filters.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => {
          const productId = product._id;
          const count = cartCounts[productId] || 0;
          const isAdding = isAddingMap[productId] || false;

          return (
            <div
              key={productId}
              className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <img
                src={product.images?.[0] || product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p>
                <strong>Category:</strong> {product.category || "N/A"}
              </p>
              <p>
                <strong>Brand:</strong> {product.brand || "N/A"}
              </p>
              <p>
                <strong>Price:</strong> {product.price} Rs
              </p>
              <p>
                <strong>Rating:</strong> {product.ratings || product.rating || 0}
              </p>

              <div className="mt-auto flex items-center justify-between gap-2">
                {/* Add to Cart */}
                <button
                  onClick={() => handleClick(product, 1)}
                  disabled={isAdding}
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors disabled:bg-blue-400"
                >
                  <FiShoppingCart />
                  Add {count > 0 && `(${count})`}
                </button>

                {/* Remove from Cart */}
                <button
                  onClick={() => handleClick(product, -1)}
                  disabled={count <= 0 || isAdding}
                  className="flex-1 flex items-center justify-center gap-2 bg-red-600 text-white py-2 rounded hover:bg-red-700 transition-colors disabled:bg-red-300"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
