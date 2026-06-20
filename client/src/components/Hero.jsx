import { FaRocket, FaInfoCircle } from "react-icons/fa";

function Hero() {
  return (
    <section className="text-center py-20 px-6 bg-gray-100 dark:bg-slate-900 transition-colors duration-300">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 dark:text-white">
        AI-Powered Guest Review Analysis
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Analyze homestay reviews instantly using Artificial Intelligence.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          <FaRocket /> Get Started
        </button>

        <button className="flex items-center justify-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition duration-300">
          <FaInfoCircle /> Learn More
        </button>
      </div>
    </section>
  );
}

export default Hero;