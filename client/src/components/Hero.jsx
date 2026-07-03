import {
  FaArrowRight,
  FaPlayCircle,
  FaChartPie,
  FaSmile,
  FaFrown,
  FaMeh,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">

      {/* Background Blur */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-cyan-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <span className="inline-flex items-center bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
              🚀 AI Powered Review Intelligence
            </span>

            <h1 className="mt-8 text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 dark:text-white">
              Understand Every
              <span className="text-blue-600 dark:text-blue-400">
                {" "}Guest Review{" "}
              </span>
              Instantly
            </h1>

            <p className="mt-8 text-lg text-slate-600 dark:text-slate-300 leading-8">
              ReviewSense helps homestay owners analyze customer feedback,
              discover hidden insights, detect common themes and improve
              guest satisfaction using Artificial Intelligence.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-xl shadow-lg transition">
                Get Started
                <FaArrowRight />
              </button>

              <button className="flex items-center gap-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white hover:border-blue-500 px-7 py-4 rounded-xl transition">
                <FaPlayCircle />
                Watch Demo
              </button>

            </div>

          </div>

          {/* RIGHT */}
          <div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-8 border border-slate-200 dark:border-slate-700">

              <div className="flex justify-between items-center mb-8">

                <h2 className="font-bold text-xl text-slate-900 dark:text-white">
                  AI Dashboard
                </h2>

                <FaChartPie
                  className="text-blue-600 dark:text-blue-400"
                  size={24}
                />

              </div>

              <div className="space-y-5">

                <div className="flex justify-between items-center bg-green-50 dark:bg-green-900/30 rounded-xl p-4 text-slate-900 dark:text-white">

                  <div className="flex items-center gap-3">
                    <FaSmile className="text-green-500" />
                    Positive
                  </div>

                  <strong>72%</strong>

                </div>

                <div className="flex justify-between items-center bg-yellow-50 dark:bg-yellow-900/30 rounded-xl p-4 text-slate-900 dark:text-white">

                  <div className="flex items-center gap-3">
                    <FaMeh className="text-yellow-500" />
                    Neutral
                  </div>

                  <strong>18%</strong>

                </div>

                <div className="flex justify-between items-center bg-red-50 dark:bg-red-900/30 rounded-xl p-4 text-slate-900 dark:text-white">

                  <div className="flex items-center gap-3">
                    <FaFrown className="text-red-500" />
                    Negative
                  </div>

                  <strong>10%</strong>

                </div>

              </div>

              <div className="mt-10">

                <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">
                  Top Themes
                </h3>

                <div className="flex flex-wrap gap-3">

                  <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full">
                    Cleanliness
                  </span>

                  <span className="bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-4 py-2 rounded-full">
                    Staff
                  </span>

                  <span className="bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full">
                    Location
                  </span>

                  <span className="bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full">
                    Food
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;