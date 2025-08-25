import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Make sure react-router-dom is set up
const API_URL = import.meta.env.VITE_API_URL;
function ProductCard() {
  const { productId } = useParams(); // assuming your route is like /product/:productId
  //   console.log("Product ID from URL:", productId);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [reviewSubmitting, setReviewSubmitting] = useState(false);
  const [reviewError, setReviewError] = useState(null);
  const [cartLoading, setCartLoading] = useState(false);
  const [cartError, setCartError] = useState(null);
  const [cartSuccess, setCartSuccess] = useState(null);

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
          quantity: 1, // Adjust as needed
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

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setReviewSubmitting(true);
    setReviewError(null);

    try {
      const res = await fetch(`${API_URL}/add-review/${productId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // or use a state/context auth
        },
        body: JSON.stringify({ rating, comment }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Error submitting review");
      }

      await fetchProduct(); // Refresh product data
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
    <div className="max-w-2xl mx-auto mt-12 p-6 rounded-lg shadow-md bg-pink-300/40">
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full h-72 object-cover rounded-md mb-4"
      />
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center  ">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          {product.name}
        </h2>
        <p className="text-3xl text-green-600 font-semibold mt-2 mb-4">
          ₹{product.price}
        </p>
      </div>
      <div className="mb-8 text-left">
        <button
          onClick={handleAddToCart}
          disabled={cartLoading}
          className="bg-orange-500 text-white text-lg px-6 py-2 rounded hover:bg-orange-600 transition disabled:opacity-50"
        >
          {cartLoading ? "Adding..." : "Add to Cart"}
        </button>

        {cartSuccess && <p className="text-green-600 mt-2">{cartSuccess}</p>}
        {cartError && <p className="text-red-500 mt-2">{cartError}</p>}
      </div>

      {product.description ? (
        <p className="text-gray-700 mb-4">{product.description}</p>
      ) : (
        <p className="text-gray-500 italic mb-4">No description available.</p>
      )}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <p className="text-lg text-gray-600 mb-1">
          Brand: <span className="font-medium">{product.brand}</span>
        </p>
        <p className="text-lg text-gray-600 mb-1">
          Category: <span className="font-medium">{product.category}</span>
        </p>
      </div>

      <div className="grid grid-cols-3 text-center text-sm text-gray-700 mb-6">
        <div className="border-r">
          <p className="text-lg font-bold">{product.stock}</p>
          <p>In Stock</p>
        </div>
        <div className="border-r">
          <p className="text-lg font-bold">{product.ratings}</p>
          <p>Avg Rating</p>
        </div>
        <div>
          <p className="text-lg font-bold">{product.reviews.length}</p>
          <p>Reviews</p>
        </div>
      </div>

      {/* Review Form */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-2">Leave a Review</h3>
        {reviewError && <p className="text-red-500 mb-2">{reviewError}</p>}
        <form onSubmit={handleReviewSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1 font-medium">
              Rating (0-5)
            </label>
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

          <button
            type="submit"
            disabled={reviewSubmitting}
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
          >
            {reviewSubmitting ? "Submitting..." : "Submit Review"}
          </button>
        </form>
      </div>

      {/* Reviews List */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
        {product.reviews.length === 0 ? (
          <p className="text-gray-500 italic">No reviews yet.</p>
        ) : (
          <ul className="space-y-4">
            {product.reviews.map((review, index) => (
              <li key={index} className="border-b pb-4">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <p className="text-yellow-600 font-medium">
                  Rating: {review.rating}/5
                </p>
                <p className="text-gray-700">{review.comment}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
