import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 border-b border-slate-700 px-6 py-4 flex justify-between items-center">
      <Link to="/">
        <h1 className="text-3xl font-bold text-cyan-400">
          Mini Game Hub
        </h1>
      </Link>

      <div className="flex gap-6">
        <Link to="/" className="hover:text-cyan-400 duration-300">
          Home
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;