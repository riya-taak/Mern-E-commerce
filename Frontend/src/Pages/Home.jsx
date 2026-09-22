import { Link } from "react-router";


export default function Home() {
    return (
      <div className="max-w-5xl mx-auto px-4 py-16 text-center text-gray-600">
        <h1>Welcome to the MERN Store</h1>
        <Link to="/allproduct" className="underline">
          Explore All Products
        </Link>
      </div>
    );
}
