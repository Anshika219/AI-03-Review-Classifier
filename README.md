# ReviewSense AI – Homestay Review Classifier

## Overview

ReviewSense AI is a full-stack web application that analyzes homestay guest reviews. It allows users to view reviews through a React frontend while the Express.js backend provides REST APIs to manage review data.

---

## Features

* React + Vite frontend
* Express.js backend
* REST API (GET, POST, PUT, DELETE)
* Search reviews by sentiment
* Axios integration
* Loading and error handling
* Responsive UI
* Dark mode support

---

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* CORS
* dotenv
* Nodemon

---

## Project Structure

```
AI-03-Review-Classifier/
│
├── client/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── data/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## How to Run the Frontend

Open a terminal:

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## How to Run the Backend Locally

Open another terminal:

```bash
cd server
npm install
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

API Endpoint:

```
GET http://localhost:5000/reviews
```

---

## Environment Variables

Create a `.env` file inside the `server` folder.

```
PORT=5000
```

> The `.env` file is ignored using `.gitignore` and should not be committed to GitHub.

---

## API Endpoints

| Method | Endpoint                     | Description      |
| ------ | ---------------------------- | ---------------- |
| GET    | `/reviews`                   | Get all reviews  |
| GET    | `/reviews/:id`               | Get review by ID |
| POST   | `/reviews`                   | Add a review     |
| PUT    | `/reviews/:id`               | Update a review  |
| DELETE | `/reviews/:id`               | Delete a review  |
| GET    | `/reviews/search?q=positive` | Search reviews   |

---

## Future Improvements

* AI-powered sentiment analysis
* User authentication
* Database integration
* Review analytics dashboard

---

## Author

**Anshika Gaur**
