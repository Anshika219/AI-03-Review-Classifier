import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaRobot,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 mt-24">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-3 mb-5">

              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                <FaRobot className="text-white text-xl" />
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">
                  ReviewSense
                </h2>

                <p className="text-sm text-slate-400">
                  AI Review Intelligence
                </p>
              </div>

            </div>

            <p className="leading-7 text-slate-400">

              AI-powered platform that analyzes guest reviews,
              detects sentiments, identifies themes and helps
              homestay owners improve customer satisfaction.

            </p>

          </div>

          {/* Product */}

          <div>

            <h3 className="text-white font-semibold mb-5">
              Product
            </h3>

            <ul className="space-y-3">

              <li className="hover:text-white cursor-pointer">
                Dashboard
              </li>

              <li className="hover:text-white cursor-pointer">
                Review Analysis
              </li>

              <li className="hover:text-white cursor-pointer">
                AI Insights
              </li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-white font-semibold mb-5">
              Company
            </h3>

            <ul className="space-y-3">

              <li className="hover:text-white cursor-pointer">
                About
              </li>

              <li className="hover:text-white cursor-pointer">
                Contact
              </li>

              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>

            </ul>

          </div>

          {/* Connect */}

          <div>

            <h3 className="text-white font-semibold mb-5">
              Connect
            </h3>

            <div className="flex gap-5 text-2xl">

              <FaGithub className="hover:text-white cursor-pointer transition" />

              <FaLinkedin className="hover:text-blue-400 cursor-pointer transition" />

              <FaEnvelope className="hover:text-red-400 cursor-pointer transition" />

            </div>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-sm">
            © 2026 ReviewSense. All rights reserved.
          </p>

          <p className="text-sm mt-4 md:mt-0">
            Built with ❤️ using React, Node.js & AI
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;