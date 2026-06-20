import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-slate-950 dark:text-white transition-colors duration-300">
      <Navbar />

      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">
          About Project
        </h1>

        <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
          This project analyzes homestay guest reviews using AI-powered
          sentiment analysis and theme detection.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default About;