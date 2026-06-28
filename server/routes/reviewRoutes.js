const express = require("express");
const router = express.Router();

const {
    getAllReviews,
    getReviewById,
    addReview,
    updateReview,
    deleteReview,
    searchReviewsBySentiment,
} = require("../controllers/reviewController");

// Search reviews
router.get("/search", searchReviewsBySentiment);

// Get all reviews
router.get("/", getAllReviews);

// Get review by ID
router.get("/:id", getReviewById);

// Add a new review
router.post("/", addReview);

// Update a review
router.put("/:id", updateReview);

// Delete a review
router.delete("/:id", deleteReview);

module.exports = router;