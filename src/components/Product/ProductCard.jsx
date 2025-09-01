import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const API_URL = import.meta.env.VITE_API_URL;

function ProductCard() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cart
  const [cartLoading, setCartLoading] = useState(false);
  const [cartError, setCartError] = useState(null);
  const [cartSuccess, setCartSuccess] = useState(null);

  // Reviews
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [reviewSubmitting, setReviewSubmitting] = useState(false);
  const [reviewError, setReviewError] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/get-product/${productId}`);
      const data = await res.json();
      setProduct(data);
    } catch (err) {
      setError("Failed to fetch product");
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async () => {
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

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setReviewSubmitting(true);
    setReviewError(null);

    try {
      const res = await fetch(`${API_URL}/add-review/${productId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ rating, comment }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Error submitting review");
      }

      await fetchProduct();
      setRating(0);
      setComment("");
    } catch (err) {
      setReviewError(err.message);
    } finally {
      setReviewSubmitting(false);
    }
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return <div className="text-red-500 text-center mt-10">{error}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto mt-16 p-8 rounded-2xl shadow-lg bg-[#fafaf1]"
    >
      {/* Image */}
      <motion.img
        src={product.images[0]}
        alt={product.name}
        className="w-full h-80 object-cover rounded-xl mb-6 shadow-md"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Title & Price */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
        <h2 className="text-3xl font-bold text-[#152336]">{product.name}</h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl text-green-600 font-semibold mt-2 sm:mt-0"
        >
          ₹{product.price}
        </motion.p>
      </div>

      {/* Add to Cart */}
      <div className="mb-8">
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          onClick={handleAddToCart}
          disabled={cartLoading}
          className="bg-[#152336] text-white text-lg px-6 py-3 rounded-lg hover:bg-[#1e3450] transition disabled:opacity-50"
        >
          {cartLoading ? "Adding..." : "Add to Cart"}
        </motion.button>
        {cartSuccess && <p className="text-green-600 mt-2">{cartSuccess}</p>}
        {cartError && <p className="text-red-500 mt-2">{cartError}</p>}
      </div>

      {/* Description */}
      {product.description ? (
        <p className="text-gray-700 mb-6 leading-relaxed">
          {product.description}
        </p>
      ) : (
        <p className="text-gray-500 italic mb-6">No description available.</p>
      )}

      {/* Brand & Category */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 text-gray-700">
        <p>
          <span className="font-semibold">Brand:</span> {product.brand}
        </p>
        <p>
          <span className="font-semibold">Category:</span> {product.category}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 text-center text-gray-700 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-r"
        >
          <p className="text-lg font-bold">{product.stock}</p>
          <p>In Stock</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="border-r"
        >
          <p className="text-lg font-bold">{product.ratings}</p>
          <p>Avg Rating</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-lg font-bold">{product.reviews.length}</p>
          <p>Reviews</p>
        </motion.div>
      </div>

      {/* Review Form */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-10"
      >
        <h3 className="text-xl font-semibold mb-3 text-[#152336]">
          Leave a Review
        </h3>
        {reviewError && <p className="text-red-500 mb-2">{reviewError}</p>}
        <form onSubmit={handleReviewSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1 font-medium">Rating (0-5)</label>
            <input
              type="number"
              value={rating}
              min={0}
              max={5}
              step={0.5}
              onChange={(e) => setRating(Number(e.target.value))}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1 font-medium">Comment</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Write your thoughts..."
              required
            ></textarea>
          </div>

          <motion.button
            type="submit"
            disabled={reviewSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {reviewSubmitting ? "Submitting..." : "Submit Review"}
          </motion.button>
        </form>
      </motion.div>

      {/* Reviews */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-[#152336]">
          Customer Reviews
        </h3>
        {product.reviews.length === 0 ? (
          <p className="text-gray-500 italic">No reviews yet.</p>
        ) : (
          <ul className="space-y-4">
            {product.reviews.map((review, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b pb-4"
              >
                <div className="flex items-center justify-between">
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <p className="text-yellow-600 font-medium">
                  ⭐ {review.rating}/5
                </p>
                <p className="text-gray-700">{review.comment}</p>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

export default ProductCard;
