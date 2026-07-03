import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

import {
  FaUpload,
  FaRobot,
  FaTags,
  FaChartLine,
} from "react-icons/fa";

function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">

      <Navbar />

      <Hero />

      {/* ================= FEATURES ================= */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Powerful AI Features
          </h2>

          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Everything you need to understand guest feedback in one platform.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <Card
            title="Sentiment Analysis"
            description="Automatically classify guest reviews into Positive, Neutral and Negative sentiments."
          />

          <Card
            title="Theme Detection"
            description="Identify common themes like Cleanliness, Food, Staff, Rooms and Location."
          />

          <Card
            title="AI Insights"
            description="Generate smart summaries and recommendations using Artificial Intelligence."
          />

        </div>

      </section>

      {/* ================= HOW IT WORKS ================= */}

      <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
              How ReviewSense Works
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Analyze guest reviews in four simple steps and gain actionable
              insights to improve customer satisfaction.
            </p>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            {/* Step 1 */}

            <div className="group bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">

                <FaUpload className="text-3xl text-blue-600 dark:text-blue-400" />

              </div>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                Upload Reviews
              </h3>

              <p className="mt-3 text-slate-600 dark:text-slate-300">
                Upload or paste guest reviews collected from your homestay
                platform.
              </p>

            </div>

            {/* Step 2 */}

            <div className="group bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-green-100 dark:bg-green-900/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">

                <FaRobot className="text-3xl text-green-600 dark:text-green-400" />

              </div>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                AI Analysis
              </h3>

              <p className="mt-3 text-slate-600 dark:text-slate-300">
                Our AI analyzes every review and classifies it as Positive,
                Neutral or Negative.
              </p>

            </div>

            {/* Step 3 */}

            <div className="group bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">

                <FaTags className="text-3xl text-purple-600 dark:text-purple-400" />

              </div>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                Theme Detection
              </h3>

              <p className="mt-3 text-slate-600 dark:text-slate-300">
                Detect important themes such as Food, Staff, Cleanliness,
                Location and Rooms.
              </p>

            </div>

            {/* Step 4 */}

            <div className="group bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-orange-100 dark:bg-orange-900/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">

                <FaChartLine className="text-3xl text-orange-600 dark:text-orange-400" />

              </div>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                View Insights
              </h3>

              <p className="mt-3 text-slate-600 dark:text-slate-300">
                Explore dashboards, trends and AI-generated insights to improve
                guest satisfaction.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="py-24 px-6 text-center">

        <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
          Ready to analyze your guest reviews?
        </h2>

        <p className="mt-5 max-w-2xl mx-auto text-slate-600 dark:text-slate-300 text-lg">
          Upload reviews, detect customer sentiment, discover recurring themes,
          and improve your homestay experience using AI-powered analytics.
        </p>

        <button className="mt-10 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">

          Get Started

        </button>

      </section>

      <Footer />

    </div>
  );
}

export default Home;