import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-300 px-8 py-5 flex justify-between items-center sticky top-0 z-50 shadow-sm">
      <Link to="/">
        <h1 className="text-3xl font-bold text-blue-600">
          Mini Game Hub
        </h1>
      </Link>

      <div className="flex gap-8 text-lg font-medium">
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-600 duration-300"
        >
          Home
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;