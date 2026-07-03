import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaSignInAlt,
} from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">

      <Navbar />

      <main className="flex items-center justify-center px-6 py-20">

        <div className="w-full max-w-md">

          <div className="rounded-3xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-700 p-8">

            {/* Heading */}

            <div className="text-center mb-8">

              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">

                <FaSignInAlt
                  size={32}
                  className="text-blue-600"
                />

              </div>

              <h1 className="text-3xl font-bold">
                Welcome Back
              </h1>

              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Sign in to access your ReviewSense dashboard.
              </p>

            </div>

            {/* Email */}

            <div className="mb-5">

              <label className="block mb-2 font-medium">
                Email
              </label>

              <div className="relative">

                <FaEnvelope className="absolute left-4 top-4 text-slate-400" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 outline-none"
                />

              </div>

            </div>

            {/* Password */}

            <div>

              <label className="block mb-2 font-medium">
                Password
              </label>

              <div className="relative">

                <FaLock className="absolute left-4 top-4 text-slate-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full pl-12 pr-12 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-slate-500 hover:text-blue-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>

              </div>

            </div>

            {/* Remember */}

            <div className="flex items-center justify-between mt-6">

              <label className="flex items-center gap-2 text-sm">

                <input type="checkbox" />

                Remember Me

              </label>

              <button
                className="text-blue-600 hover:underline text-sm"
              >
                Forgot Password?
              </button>

            </div>

            {/* Login Button */}

            <button
              className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl"
            >
              Sign In
            </button>

            {/* Divider */}

            <div className="flex items-center my-8">

              <div className="flex-1 h-px bg-slate-300 dark:bg-slate-700"></div>

              <span className="px-4 text-slate-500 text-sm">
                OR
              </span>

              <div className="flex-1 h-px bg-slate-300 dark:bg-slate-700"></div>

            </div>

            {/* Register */}

            <p className="text-center text-slate-600 dark:text-slate-300">

              Don't have an account?

              <button className="ml-2 text-blue-600 font-semibold hover:underline">
                Create Account
              </button>

            </p>

          </div>

        </div>

      </main>

      <Footer />

    </div>
  );
}

export default Login;