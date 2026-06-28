const reviews = require("../data/reviews");

// GET all reviews
const getAllReviews = (req, res) => {
    res.status(200).json(reviews);
};

// GET review by ID
const getReviewById = (req, res) => {
    const reviewId = parseInt(req.params.id);

    const review = reviews.find((r) => r.id === reviewId);

    if (!review) {
        return res.status(404).json({ message: "Review not found" });
    }

    res.status(200).json(review);
};

// POST a new review
const addReview = (req, res) => {

    const { guestName, rating, comment, sentiment } = req.body || {};

    if (!guestName || !rating || !comment || !sentiment) {
        return res.status(400).json({
            message: "All fields are required."
        });
    }

    const newReview = {
        id: reviews.length + 1,
        guestName,
        rating,
        comment,
        sentiment,
    };

    reviews.push(newReview);

    res.status(201).json(newReview);
};

// PUT update a review
const updateReview = (req, res) => {

    const reviewId = parseInt(req.params.id);

    const review = reviews.find((r) => r.id === reviewId);

    if (!review) {
        return res.status(404).json({
            message: "Review not found"
        });
    }

    Object.assign(review, req.body);

    res.status(200).json(review);
};

// DELETE a review
const deleteReview = (req, res) => {

    const reviewId = parseInt(req.params.id);

    const reviewIndex = reviews.findIndex((r) => r.id === reviewId);

    if (reviewIndex === -1) {
        return res.status(404).json({
            message: "Review not found"
        });
    }

    reviews.splice(reviewIndex, 1);

    res.status(204).send();
};

// SEARCH reviews
const searchReviewsBySentiment = (req, res) => {

    const query = req.query.q?.toLowerCase() || "";

    const filteredReviews = reviews.filter(
        (r) =>
            r.sentiment.toLowerCase().includes(query) ||
            r.guestName.toLowerCase().includes(query) ||
            r.comment.toLowerCase().includes(query)
    );

    res.status(200).json(filteredReviews);
};

module.exports = {
    getAllReviews,
    getReviewById,
    addReview,
    updateReview,
    deleteReview,
    searchReviewsBySentiment,
};