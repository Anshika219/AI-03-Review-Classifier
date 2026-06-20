import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
<nav className="bg-slate-700 dark:bg-slate-800 text-white px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 transition-colors duration-300">      <h1 className="text-xl font-bold">ReviewSense AI</h1>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>

        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;