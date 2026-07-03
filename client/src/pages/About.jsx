import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaRobot,
  FaBrain,
  FaChartPie,
  FaUsers,
  FaBullseye,
  FaLightbulb,
} from "react-icons/fa";

function About() {
  const features = [
    {
      icon: <FaRobot />,
      title: "AI-Powered Analysis",
      description:
        "ReviewSense uses Artificial Intelligence to analyze guest reviews and identify customer sentiment.",
      color: "text-blue-600",
      bg: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      icon: <FaBrain />,
      title: "Smart Insights",
      description:
        "Generate meaningful insights to understand guest satisfaction and improve services.",
      color: "text-purple-600",
      bg: "bg-purple-100 dark:bg-purple-900/30",
    },
    {
      icon: <FaChartPie />,
      title: "Interactive Dashboard",
      description:
        "Visualize review analytics through clean and easy-to-understand dashboards.",
      color: "text-green-600",
      bg: "bg-green-100 dark:bg-green-900/30",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">

      <Navbar />

      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white">

        <div className="max-w-6xl mx-auto px-6 py-20 text-center">

          <h1 className="text-5xl font-extrabold">
            About ReviewSense
          </h1>

          <p className="mt-6 text-lg max-w-3xl mx-auto text-blue-100">
            ReviewSense is an AI-powered web application that helps homestay
            owners analyze guest reviews, identify customer sentiment, discover
            common themes, and make data-driven decisions to improve guest
            experiences.
          </p>

        </div>

      </section>

      {/* Features */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold">
            What Makes ReviewSense Special?
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Powerful AI features designed for smarter review management.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-200 dark:border-slate-700"
            >

              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 ${feature.bg} ${feature.color}`}
              >
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-4 text-slate-600 dark:text-slate-300">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Mission & Vision */}

      <section className="bg-white dark:bg-slate-900 py-20">

        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10">

          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-md">

            <div className="flex items-center gap-4 mb-6">

              <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 text-2xl">

                <FaBullseye />

              </div>

              <h2 className="text-3xl font-bold">
                Our Mission
              </h2>

            </div>

            <p className="text-slate-600 dark:text-slate-300 leading-8">
              To help homestay owners transform customer feedback into
              actionable insights using Artificial Intelligence, enabling
              better guest experiences and smarter business decisions.
            </p>

          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-md">

            <div className="flex items-center gap-4 mb-6">

              <div className="w-14 h-14 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 text-2xl">

                <FaLightbulb />

              </div>

              <h2 className="text-3xl font-bold">
                Our Vision
              </h2>

            </div>

            <p className="text-slate-600 dark:text-slate-300 leading-8">
              To become a reliable AI-powered platform that simplifies guest
              review analysis and supports the hospitality industry with
              intelligent decision-making tools.
            </p>

          </div>

        </div>

      </section>

      {/* Why ReviewSense */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="text-center mb-14">

          <FaUsers className="text-5xl text-blue-600 mx-auto mb-6" />

          <h2 className="text-4xl font-bold">
            Why Choose ReviewSense?
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700">

            ✅ AI-powered sentiment analysis

            <br /><br />

            ✅ Theme detection for guest feedback

            <br /><br />

            ✅ Interactive analytics dashboard

            <br /><br />

            ✅ Simple and user-friendly interface

          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700">

            ✅ Faster decision making

            <br /><br />

            ✅ Better guest satisfaction

            <br /><br />

            ✅ Organized review management

            <br /><br />

            ✅ Future-ready AI integration

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default About;