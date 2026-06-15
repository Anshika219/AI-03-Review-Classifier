import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">ReviewSense AI</h1>

      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;