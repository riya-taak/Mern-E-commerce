import { Link } from "react-router";

export default function Navbar() {

  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex gap-7 items-center">
          <Link to="/allproduct" className="text-blue-600 text-xl font-bold">
            MERN Store
          </Link>
          <Link to="/admin/products">
            Admin
          </Link>
        </div>
        <div className="flex gap-3">
          <Link to="/wishlist" className="relative flex items-center gap-1 text-gray-700">
            <span className="border border-red-600 text-red-600 rounded-sm px-5 py-2">Wishlist</span>
          </Link>
          <Link to="/cart" className="relative flex items-center gap-1 text-gray-700">
            <span className="bg-blue-600 text-white rounded-sm px-5 py-2">Cart</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
