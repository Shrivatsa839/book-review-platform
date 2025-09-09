import express from "express";
import Review from "../models/Review.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Add review (protected)
router.post("/", verifyToken, async (req, res) => {
  const { bookId, rating, comment } = req.body;
  const review = await Review.create({
    bookId,
    rating,
    comment,
    userId: req.userId
  });
  res.json(review);
});

// Get reviews for a book
router.get("/:bookId", async (req, res) => {
  const reviews = await Review.find({ bookId: req.params.bookId }).populate("userId", "name");
  res.json(reviews);
});

export default router;
