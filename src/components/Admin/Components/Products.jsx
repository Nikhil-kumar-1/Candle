import React, { useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

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


  // Fetch products
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

  // Handle input change
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

  // Add an empty image input
  const addImageInput = () => {
    setNewProduct((prev) => ({
      ...prev,
      images: [...prev.images, null],
    }));
  };

  // Submit product
  const addProduct = async (e) => {
    e.preventDefault();

    if (!newProduct.name || !newProduct.category || newProduct.price <= 0) {
      alert("Please fill in all required fields: Name, Category, and Price.");
      return;
    }

    const formData = new FormData();

    formData.append("name", newProduct.name);
    formData.append("description", newProduct.description);
    formData.append("price", newProduct.price);
    formData.append("category", newProduct.category);
    formData.append("stock", newProduct.stock);
    formData.append("brand", newProduct.brand);
    formData.append("isFeatured", newProduct.isFeatured);

    newProduct.images.forEach((file) => {
      if (file) {
        formData.append("images", file); // must match backend field name
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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      {/* Add Product Form */}
      <form onSubmit={addProduct} className="mb-8 space-y-3 max-w-md">
        <div>
          <label className="block font-semibold">Name*</label>
          <input
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            required
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label className="block font-semibold">Description</label>
          <textarea
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label className="block font-semibold">Price*</label>
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            min="0"
            required
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label className="block font-semibold">Category*</label>
          <input
            name="category"
            value={newProduct.category}
            onChange={handleInputChange}
            required
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label className="block font-semibold">Brand</label>
          <input
            name="brand"
            value={newProduct.brand}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label className="block font-semibold">Stock</label>
          <input
            type="number"
            name="stock"
            value={newProduct.stock}
            onChange={handleInputChange}
            min="0"
            className="border p-2 w-full"
          />
        </div>

        {/* Images */}
        <div>
          <label className="block font-semibold">Images</label>
          {newProduct.images.map((img, i) => (
            <div key={i} className="mb-3">
              <input
                type="file"
                name={`images-${i}`}
                onChange={handleInputChange}
                accept="image/*"
                className="border p-2 w-full"
              />
              {img && (
                <img
                  src={URL.createObjectURL(img)}
                  alt={`Preview ${i}`}
                  className="w-20 h-20 object-cover mt-1 rounded"
                />
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addImageInput}
            className="text-blue-600 underline"
          >
            Add another image
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="isFeatured"
            name="isFeatured"
            checked={newProduct.isFeatured}
            onChange={handleInputChange}
          />
          <label htmlFor="isFeatured">Featured Product</label>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </form>

      {/* Product List */}
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <ul className="space-y-4">
          {products.map((p) => (
            <li key={p._id} className="border p-4 rounded border-red-700">
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p>Category: {p.category}</p>
              <p>Price: ${p.price.toFixed(2)}</p>
              <p>Stock: {p.stock}</p>
              <p>Brand: {p.brand || "-"}</p>
              <p>Featured: {p.isFeatured ? "Yes" : "No"}</p>
              {p.images?.length > 0 && (
                <div className="flex gap-2 mt-2">
                  {p.images.map((imgUrl, i) => (
                    <img
                      key={i}
                      src={imgUrl}
                      alt={`${p.name} ${i}`}
                      className="w-16 h-16 object-cover rounded"
                    />
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Products;
