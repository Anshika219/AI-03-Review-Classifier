const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");
require("dotenv").config();

const reviewRoutes = require("./routes/reviewRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("ReviewSense Backend Running 🚀");
});

// API Routes
app.use("/reviews", reviewRoutes);

// 404 Route
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});

// Error Handling Middleware
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});