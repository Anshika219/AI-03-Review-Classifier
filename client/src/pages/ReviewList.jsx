import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ReviewList() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:5000/reviews")
            .then((response) => {
                setReviews(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching reviews:", error);
                setError("Failed to load reviews. Please try again later.");
                setLoading(false);
            });
    }, []);

    return (
        <div className="min-h-screen bg-white text-black dark:bg-slate-950 dark:text-white">
            <Navbar />

            <div className="max-w-5xl mx-auto py-10 px-4">
                <h1 className="text-4xl font-bold mb-6 text-center">
                    Guest Reviews
                </h1>

                {loading ? (
                    <p className="text-center">Loading reviews...</p>
                ) : error ? (
                    <p className="text-center text-red-500 font-semibold">
                        {error}
                    </p>
                ) : reviews.length === 0 ? (
                    <p className="text-center">No reviews available.</p>
                ) : (
                    reviews.map((review) => (
                        <div
                            key={review.id}
                            className="border rounded-lg shadow-md p-5 mb-4"
                        >
                            <h2 className="text-xl font-semibold">
                                {review.guestName}
                            </h2>

                            <p className="mt-2">
                                ⭐ Rating: {review.rating}
                            </p>

                            <p className="mt-2">
                                {review.comment}
                            </p>

                            <p className="mt-2">
                                <strong>Sentiment:</strong> {review.sentiment}
                            </p>
                        </div>
                    ))
                )}
            </div>

            <Footer />
        </div>
    );
}

export default ReviewList;