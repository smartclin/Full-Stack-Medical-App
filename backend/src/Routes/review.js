const router = require('express').Router();
const { getAllReviews, createReview } = require('../controller/review.js');
const { authenticate, restrict } = require('./../auth/verifyToken.js');

// GET all reviews or POST a new review
router
  .route('/')
  .get(authenticate, restrict(['patient']), getAllReviews)
  .post(authenticate, restrict(['patient']), createReview);

module.exports = router;
