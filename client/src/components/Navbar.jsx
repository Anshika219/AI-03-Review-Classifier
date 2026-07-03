import { Link, useLocation } from "react-router-dom";
import {
  FaRobot,
  FaArrowRight,
} from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Reviews", path: "/reviews" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg">
            <FaRobot className="text-white text-lg" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">
              ReviewSense
            </h1>

            <p className="text-xs text-slate-500">
              AI Review Intelligence
            </p>
          </div>
        </Link>

        {/* Navigation */}

        <nav className="hidden md:flex items-center gap-8">

          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition font-medium ${
                location.pathname === item.path
                  ? "text-blue-600"
                  : "text-slate-600 dark:text-slate-300 hover:text-blue-600"
              }`}
            >
              {item.name}
            </Link>
          ))}

        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          <ThemeToggle />

          <Link
            to="/login"
            className="hidden md:block text-slate-700 dark:text-slate-300 hover:text-blue-600 font-medium"
          >
            Login
          </Link>

          <Link
            to="/dashboard"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg transition"
          >
            Get Started
            <FaArrowRight size={13} />
          </Link>

        </div>

      </div>

    </header>
  );
}

export default Navbar;