// src/models/Review.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class Review {
  static async create({ userId, doctorId, reviewText, rating }) {
    try {
      const review = await prisma.review.create({
        data: {
          userId,
          doctorId,
          reviewText,
          rating,
        },
      });
      await this.calculateAverageRating(doctorId);
      return review;
    } catch (error) {
      throw error;
    }
  }

  static async calculateAverageRating(doctorId) {
    try {
      const {
        _avg: { rating: averageRating },
      } = await prisma.review.aggregate({
        _avg: {
          rating: true,
        },
        where: {
          doctorId: doctorId,
        },
      });

      await prisma.doctor.update({
        where: { id: doctorId },
        data: { averageRating: averageRating || 0 },
      });

      return averageRating || 0;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Review;
