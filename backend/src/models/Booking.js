// src/models/Booking.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class Booking {
  static async createBooking(data) {
    return await prisma.booking.create({ data });
  }

  static async getBookingById(id) {
    return await prisma.booking.findUnique({
      where: { id: parseInt(id) },
      include: { doctor: true, user: true },
    });
  }

  static async updateBooking(id, data) {
    return await prisma.booking.update({
      where: { id: parseInt(id) },
      data,
    });
  }

  static async deleteBooking(id) {
    return await prisma.booking.delete({
      where: { id: parseInt(id) },
    });
  }

  static async getBookings() {
    return await prisma.booking.findMany({
      include: { doctor: true, user: true },
    });
  }
}

module.exports = Booking;
