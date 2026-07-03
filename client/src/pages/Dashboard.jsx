import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaComments,
  FaSmile,
  FaMeh,
  FaFrownOpen,
  FaChartPie,
  FaRobot,
  FaArrowUp,
} from "react-icons/fa";

function Dashboard() {
  const stats = [
    {
      title: "Total Reviews",
      value: "128",
      icon: <FaComments />,
      color: "text-blue-600",
      bg: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      title: "Positive",
      value: "78",
      icon: <FaSmile />,
      color: "text-green-600",
      bg: "bg-green-100 dark:bg-green-900/30",
    },
    {
      title: "Neutral",
      value: "32",
      icon: <FaMeh />,
      color: "text-yellow-600",
      bg: "bg-yellow-100 dark:bg-yellow-900/30",
    },
    {
      title: "Negative",
      value: "18",
      icon: <FaFrownOpen />,
      color: "text-red-600",
      bg: "bg-red-100 dark:bg-red-900/30",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}

        <div className="mb-10">

          <h1 className="text-4xl font-bold">
            Dashboard
          </h1>

          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Monitor guest reviews and AI-generated insights.
          </p>

        </div>

        {/* KPI Cards */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-slate-200 dark:border-slate-700"
            >

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-slate-500 dark:text-slate-400">
                    {item.title}
                  </p>

                  <h2 className="text-3xl font-bold mt-2">
                    {item.value}
                  </h2>

                </div>

                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl ${item.bg} ${item.color}`}
                >
                  {item.icon}
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Main Content */}

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          {/* Sentiment */}

          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 p-8">

            <div className="flex items-center gap-3 mb-8">

              <FaChartPie className="text-blue-600 text-2xl" />

              <h2 className="text-2xl font-semibold">
                Sentiment Overview
              </h2>

            </div>

            <div className="space-y-6">

              <div>

                <div className="flex justify-between mb-2">
                  <span>Positive</span>
                  <span>61%</span>
                </div>

                <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full">

                  <div className="h-3 bg-green-500 rounded-full w-[61%]"></div>

                </div>

              </div>

              <div>

                <div className="flex justify-between mb-2">
                  <span>Neutral</span>
                  <span>25%</span>
                </div>

                <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full">

                  <div className="h-3 bg-yellow-500 rounded-full w-[25%]"></div>

                </div>

              </div>

              <div>

                <div className="flex justify-between mb-2">
                  <span>Negative</span>
                  <span>14%</span>
                </div>

                <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full">

                  <div className="h-3 bg-red-500 rounded-full w-[14%]"></div>

                </div>

              </div>

            </div>

          </div>

          {/* AI Insights */}

          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 p-8">

            <div className="flex items-center gap-3 mb-8">

              <FaRobot className="text-purple-600 text-2xl" />

              <h2 className="text-2xl font-semibold">
                AI Insights
              </h2>

            </div>

            <div className="space-y-6">

              <div className="flex gap-3">

                <FaArrowUp className="text-green-500 mt-1" />

                <p>
                  Guests consistently praise the cleanliness and friendly staff.
                </p>

              </div>

              <div className="flex gap-3">

                <FaArrowUp className="text-yellow-500 mt-1" />

                <p>
                  Food quality receives mixed feedback and could be improved.
                </p>

              </div>

              <div className="flex gap-3">

                <FaArrowUp className="text-red-500 mt-1" />

                <p>
                  Some reviews mention delays during check-in.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Recent Reviews */}

        <div className="mt-10 bg-white dark:bg-slate-900 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 p-8">

          <h2 className="text-2xl font-semibold mb-6">
            Recent Reviews
          </h2>

          <div className="space-y-4">

            <div className="rounded-xl bg-slate-100 dark:bg-slate-800 p-5">
              ⭐⭐⭐⭐⭐ Amazing stay! Rooms were clean and the host was very helpful.
            </div>

            <div className="rounded-xl bg-slate-100 dark:bg-slate-800 p-5">
              ⭐⭐⭐ Good location but breakfast quality could be better.
            </div>

            <div className="rounded-xl bg-slate-100 dark:bg-slate-800 p-5">
              ⭐⭐ Check-in was slow, but the room was comfortable.
            </div>

          </div>

        </div>

      </main>

      <Footer />

    </div>
  );
}

export default Dashboard;