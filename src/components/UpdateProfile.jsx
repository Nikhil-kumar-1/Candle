import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiPhone, FiMapPin, FiSave } from "react-icons/fi";

export default function UpdateProfile() {
  const [user, setUser] = useState(null);
  const [updateData, setUpdateData] = useState({
    phone: "",
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
      country: ""
    }
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setUpdateData({
        phone: storedUser.phone || "",
        address: storedUser.address || {
          street: "",
          city: "",
          state: "",
          zip: "",
          country: ""
        }
      });
    }
  }, []);

  const handleChange = (e) => {
    setUpdateData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleAddressChange = (field, value) => {
    setUpdateData((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [field]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/api/v1/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Profile updated successfully!");
        const updatedUser = { ...user, ...updateData };
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
      });
  };

  if (!user) {
    return <p className="text-center mt-10 text-gray-500">Loading profile...</p>;
  }

  return (
    <motion.div 
      className="max-w-5xl mx-auto mt-10 p-6 grid md:grid-cols-2 gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* LEFT: Profile Info */}
      <motion.div className="bg-white shadow-lg rounded-xl p-6 border" whileHover={{ scale: 1.02 }}>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FiUser className="text-blue-500" /> Profile Details
        </h2>
        <div className="space-y-4 text-gray-700">
          <p className="flex items-center gap-3">
            <FiUser className="text-gray-500" /> 
            <span className="font-medium">Name:</span> {user.name}
          </p>
          <p className="flex items-center gap-3">
            <FiMail className="text-gray-500" /> 
            <span className="font-medium">Email:</span> {user.email}
          </p>
          <p className="flex items-center gap-3">
            <FiPhone className="text-gray-500" /> 
            <span className="font-medium">Phone:</span> {user.phone || "Not set"}
          </p>
          <p className="flex items-center gap-3">
            <FiMapPin className="text-gray-500" /> 
            <span className="font-medium">Address:</span> 
            {user.address?.street
              ? `${user.address.street}, ${user.address.city}, ${user.address.state}, ${user.address.zip}, ${user.address.country}`
              : "Not set"}
          </p>
        </div>
      </motion.div>

      {/* RIGHT: Update Form */}
      <motion.div className="bg-white shadow-lg rounded-xl p-6 border" whileHover={{ scale: 1.02 }}>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FiSave className="text-green-500" /> Update Info
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Phone Number</label>
            <input
              name="phone"
              value={updateData.phone}
              onChange={handleChange}
              placeholder="Enter phone"
              className="border p-2 rounded w-full focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["street", "city", "state", "zip", "country"].map((field, idx) => (
              <div key={field} className={idx === 4 ? "md:col-span-2" : ""}>
                <label className="block mb-1 text-sm font-medium capitalize">{field}</label>
                <input
                  value={updateData.address[field]}
                  onChange={(e) => handleAddressChange(field, e.target.value)}
                  placeholder={`Enter ${field}`}
                  className="border p-2 rounded w-full focus:ring focus:ring-blue-200"
                />
              </div>
            ))}
          </div>

          <motion.button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
            whileTap={{ scale: 0.95 }}
          >
            <FiSave /> Save Changes
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}
