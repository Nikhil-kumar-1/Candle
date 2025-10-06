import { Link } from "react-router-dom";
const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>

        {/* Admin Panels or Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example widgets – replace or add real ones */}
            <Link to={"/admin/users"}>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Users</h2>
            <p className="text-gray-600">Manage user accounts and permissions.</p>
          </div>
            </Link>

            <Link to={"/admin/orders"}>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Orders</h2>
            <p className="text-gray-600">View and process recent orders.</p>
          </div>
            </Link>
            <Link to={"/admin/products"}>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Products</h2>
            <p className="text-gray-600">Manage product listings and inventory.</p>
          </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Admin;
