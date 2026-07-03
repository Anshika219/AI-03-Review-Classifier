import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaSearch,
  FaUserCircle,
  FaSmile,
  FaMeh,
  FaFrown,
} from "react-icons/fa";

function ReviewList() {
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/reviews")
      .then((response) => {
        setReviews(response.data);
        setFilteredReviews(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to load reviews.");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = reviews.filter(
      (review) =>
        review.guestName.toLowerCase().includes(search.toLowerCase()) ||
        review.comment.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredReviews(filtered);
  }, [search, reviews]);

  const sentimentBadge = (sentiment) => {
    switch (sentiment?.toLowerCase()) {
      case "positive":
        return (
          <span className="flex items-center gap-2 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
            <FaSmile />
            Positive
          </span>
        );

      case "neutral":
        return (
          <span className="flex items-center gap-2 bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
            <FaMeh />
            Neutral
          </span>
        );

      default:
        return (
          <span className="flex items-center gap-2 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 px-3 py-1 rounded-full text-sm font-medium">
            <FaFrown />
            Negative
          </span>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">

      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-10">

        <div className="mb-10 text-center">

          <h1 className="text-4xl font-bold">
            Guest Reviews
          </h1>

          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Browse, search and analyze customer feedback.
          </p>

        </div>

        {/* Search */}

        <div className="relative mb-10">

          <FaSearch className="absolute left-5 top-4 text-slate-400" />

          <input
            type="text"
            placeholder="Search by guest name or review..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {loading ? (
          <p className="text-center text-lg">
            Loading reviews...
          </p>
        ) : error ? (
          <p className="text-center text-red-500 font-semibold">
            {error}
          </p>
        ) : filteredReviews.length === 0 ? (
          <p className="text-center">
            No reviews found.
          </p>
        ) : (
          <div className="space-y-6">

            {filteredReviews.map((review) => (

              <div
                key={review.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
              >

                <div className="flex justify-between items-start flex-wrap gap-4">

                  <div className="flex gap-4">

                    <FaUserCircle
                      size={50}
                      className="text-blue-500"
                    />

                    <div>

                      <h2 className="text-xl font-bold">
                        {review.guestName}
                      </h2>

                      <p className="text-yellow-500 mt-1">
                        {"⭐".repeat(review.rating)}
                      </p>

                    </div>

                  </div>

                  {sentimentBadge(review.sentiment)}

                </div>

                <p className="mt-6 leading-7 text-slate-700 dark:text-slate-300">
                  {review.comment}
                </p>

                {/* Theme Tags */}

                <div className="flex flex-wrap gap-2 mt-6">

                  <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                    Cleanliness
                  </span>

                  <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 px-3 py-1 rounded-full text-sm">
                    Staff
                  </span>

                  <span className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 px-3 py-1 rounded-full text-sm">
                    Location
                  </span>

                </div>

                {/* AI Summary */}

                <div className="mt-6 rounded-xl bg-slate-100 dark:bg-slate-800 p-4">

                  <h3 className="font-semibold mb-2">
                    AI Summary
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300">
                    Guests appreciated the overall experience. The review mainly
                    highlights cleanliness, staff behaviour and accommodation quality.
                  </p>

                </div>

              </div>

            ))}

          </div>
        )}

      </main>

      <Footer />

    </div>
  );
}

export default ReviewList;